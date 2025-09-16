import { TokenLogo } from '@/features';
import { useRuneDialog } from '@/features/runes/api';
import { Button, Dialog, DialogContent, DialogOverlay } from '@/shared';
import {
  calculateTransactionsCost,
  multisigAddress,
} from '@midl-xyz/midl-js-executor';
import {
  useAddRuneERC20,
  useERC20Rune,
  useBTCFeeRate,
} from '@midl-xyz/midl-js-executor-react';
import {
  useConfig,
  useRune,
  useWaitForTransaction,
} from '@midl-xyz/midl-js-react';
import { DialogProps, DialogTitle } from '@radix-ui/react-dialog';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import { formatUnits, zeroAddress } from 'viem';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type AddRuneDialogProps = DialogProps & {
  onClose: () => void;
};

export const AddRuneDialog = ({ onClose, ...rest }: AddRuneDialogProps) => {
  const { state } = useRuneDialog();
  const { rune } = useRune({
    runeId: state.value.runeId,
    query: {
      enabled: Boolean(state.value.runeId),
    },
  });

  const {
    addRuneERC20,
    data,
    isPending: isTransactionBeingFormed,
    error,
    reset,
  } = useAddRuneERC20({
    mutation: {
      onError(error) {
        console.error(error);
        toast.error(error.message);
      },
      onSuccess(data) {
        waitForTransaction({
          txId: data.tx.id,
        });
      },
    },
  });
  const {
    waitForTransaction,
    isSuccess: isBtcConfirmed,
    reset: resetWait,
  } = useWaitForTransaction();
  const { network } = useConfig();

  const feeRate = useBTCFeeRate();

  const hasBroadcast = Boolean(data?.tx?.id);

  // Start polling EVM result only after BTC is confirmed and tx is broadcasted
  const shouldPollEvm = hasBroadcast && isBtcConfirmed;

  const { erc20Address, erc20State } = useERC20Rune(rune?.id || '', {
    query: {
      enabled: shouldPollEvm,
      refetchInterval: 2000,
    },
  });

  const { error: erc20Error } = erc20State;

  const isErc20Ready = !!erc20Address && erc20Address !== zeroAddress;

  // Track refetch attempts by observing dataUpdatedAt; after 6 updates with zero address -> error
  const [refetchCount, setRefetchCount] = useState(0);
  const lastUpdatedAtRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldPollEvm) {
      setRefetchCount(0);
      lastUpdatedAtRef.current = null;
      return;
    }
    const updatedAt = erc20State?.dataUpdatedAt ?? null;
    if (updatedAt && updatedAt !== lastUpdatedAtRef.current) {
      lastUpdatedAtRef.current = updatedAt;
      if (erc20Address === zeroAddress) {
        setRefetchCount((c) => c + 1);
      } else {
        setRefetchCount(0);
      }
    }
  }, [shouldPollEvm, erc20State?.dataUpdatedAt, erc20Address]);

  const retriesExhaustedNoAddress =
    shouldPollEvm && refetchCount >= 6 && erc20Address === zeroAddress;

  const errorMessage =
    erc20Error?.message ||
    error?.message ||
    (retriesExhaustedNoAddress ? 'Rune addition error' : null);

  const { data: edictFee } = useQuery({
    queryKey: ['edictFee'],
    queryFn: async () => {
      const fee = calculateTransactionsCost(0n, {
        hasRunesDeposit: true,
        feeRate: Number(feeRate.data ?? 1n),
      });

      return fee > 546n ? fee : 546n;
    },
  });

  const onConfirm = async () => {
    addRuneERC20({
      runeId: rune!.id,
      publish: true,
    });
  };

  const handleClose = () => {
    onClose();
    reset();
    resetWait();
  };

  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={handleClose} />
      <DialogContent
        onEscapeKeyDown={handleClose}
        className={css({
          maxW: '460px',
          width: '100%',
        })}
      >
        {isBtcConfirmed && isErc20Ready && (
          <div
            className={vstack({
              gap: 8,
              justifyContent: 'stretch',
            })}
          >
            <DialogTitle asChild>
              <h1
                className={css({
                  textStyle: 'h3',
                })}
              >
                Transaction confirmed
              </h1>
            </DialogTitle>

            <p>
              The transaction has been confirmed. The rune has been added to the
              MIDL ecosystem.
            </p>

            <Button onClick={handleClose}>Close</Button>
          </div>
        )}

        {hasBroadcast && (!isBtcConfirmed || !isErc20Ready) && (
          <div
            className={vstack({
              gap: 8,
              justifyContent: 'stretch',
            })}
          >
            <DialogTitle asChild>
              <h1
                className={css({
                  textStyle: 'h3',
                })}
              >
                Confirming transaction
              </h1>
            </DialogTitle>

            {errorMessage ? (
              <p
                className={css({
                  color: 'red.500',
                })}
              >
                {errorMessage}
              </p>
            ) : (
              <>
                <Loader2Icon
                  className={css({
                    animation: 'spin 1s linear infinite',
                    display: 'inline-block',
                  })}
                />
                <p>Waiting for the transaction to be confirmed...</p>
              </>
            )}

            <a
              href={`${network?.explorerUrl}/tx/${data?.tx.id}`}
              target="_blank"
              className={css({
                color: 'blue.500',
                textDecoration: 'underline',
                fontSize: 14,
              })}
            >
              View transaction
            </a>
          </div>
        )}

        {!hasBroadcast && (
          <div
            className={vstack({
              gap: 8,
              justifyContent: 'stretch',
            })}
          >
            <DialogTitle asChild>
              <h1
                className={css({
                  textStyle: 'h3',
                })}
              >
                Add token to the MIDL ecosystem
              </h1>
            </DialogTitle>

            <TokenLogo runeId={rune?.id} size={12} />

            <p style={{ wordBreak: 'break-all' }}>
              To add the token, please transfer the minimum amount (e.g 1{' '}
              {rune?.symbol}) of <b>{rune?.spaced_name}</b> and validator's fee
              ({formatUnits(BigInt(edictFee ?? 546), 8)} BTC) to the following
              address:
              <br />
              <i>{multisigAddress[network!.id]}</i>
            </p>
            <Button
              width="full"
              disabled={isTransactionBeingFormed}
              onClick={onConfirm}
            >
              {isTransactionBeingFormed ? 'Confirming...' : 'Add token'}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
