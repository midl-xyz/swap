import { useStateOverride } from '@/features/state-override';
import { Button } from '@/shared';
import { xverseConnector } from '@midl-xyz/midl-js-connectors';
import {
  useAddTxIntention,
  useFinalizeBTCTransaction,
  useSendBTCTransactions,
  useSignIntention,
  useSignIntentions,
} from '@midl-xyz/midl-js-executor-react';
import { useConfig, useWaitForTransaction } from '@midl-xyz/midl-js-react';
import { useCallback, useEffect, useRef, type ReactNode } from 'react';
import toast from 'react-hot-toast';
import { Address } from 'viem';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type IntentionSignerProps = {
  onClose: () => void;
  assetsToWithdraw?: [Address] | [Address, Address];
  children?: ReactNode;
};

export const IntentionSigner = ({
  assetsToWithdraw,
  onClose,
  children,
}: IntentionSignerProps) => {
  const { txIntentions } = useAddTxIntention();

  const {
    data: btcTransaction,
    finalizeBTCTransaction,
    isSuccess: isFinalizedBTC,
    isPending: isFinalizingBTC,
  } = useFinalizeBTCTransaction({
    mutation: {
      onError: (error) => {
        console.error(error);

        const btcBalanceError = 'BTC balance is not enough to cover tx costs';
        if (error.message === 'No selected UTXOs') {
          error.message = btcBalanceError;
        }

        if (error.message === 'No ordinals UTXOs') {
          error.message =
            'MIDL•RUNE•STABLECOIN balance is not enough to cover tx';
        }
        if (error.message === 'Insufficient funds') {
          error.message = 'Wallet balance is not enough';
        }

        if (error.message.startsWith('Cannot destructure')) {
          error.message =
            'Error at transaction signing. Refresh the page and try again';
        }
        toast.error(error.message);
      },
      onSuccess: () => {
        setStateOverride([]);
      },
    },
  });
  const [customStateOverride, setStateOverride] = useStateOverride();

  const { network, connection } = useConfig();
  const isXverse = connection?.id === xverseConnector().id;

  const signIntentionState = useSignIntention({});
  const signIntentionsState = useSignIntentions();

  const { waitForTransaction, isPending, isSuccess } = useWaitForTransaction();

  const toSignIntentions = txIntentions.filter((it) => it.evmTransaction);
  const txToSign = toSignIntentions.find((it) => !it.signedEvmTransaction);

  const { sendBTCTransactions, isSuccess: isBroadcasted } =
    useSendBTCTransactions({
      mutation: {
        onSuccess: () => {
          waitForTransaction({ txId: btcTransaction?.tx.id! });
        },
      },
    });

  const onPublish = useCallback(async () => {
    let serializedTransactions: `0x${string}`[];

    if (isXverse && signIntentionsState.data) {
      serializedTransactions = signIntentionsState.data;
    } else {
      serializedTransactions = txIntentions
        .filter((it) => it.signedEvmTransaction)
        .map((it) => it.signedEvmTransaction!);
    }

    sendBTCTransactions({
      serializedTransactions,
      btcTransaction: btcTransaction?.tx.hex!,
    });
  }, [
    txIntentions,
    btcTransaction,
    sendBTCTransactions,
    isXverse,
    signIntentionsState.data,
  ]);

  const allIntentionsSigned = isXverse
    ? signIntentionsState.isSuccess
    : !txToSign;

  // Auto-publish transaction after all signatures are complete
  const hasAutoPublished = useRef(false);
  useEffect(() => {
    if (
      isFinalizedBTC &&
      allIntentionsSigned &&
      btcTransaction &&
      !isBroadcasted &&
      !hasAutoPublished.current
    ) {
      hasAutoPublished.current = true;
      onPublish();
    }
  }, [
    isFinalizedBTC,
    allIntentionsSigned,
    btcTransaction,
    isBroadcasted,
    onPublish,
  ]);

  const currentSignState = isXverse ? signIntentionsState : signIntentionState;
  const showSignButton =
    isFinalizedBTC && btcTransaction && !allIntentionsSigned;

  const stepCount = isXverse ? 2 : toSignIntentions.length + 1;

  const getStepState = (i: number) => {
    if (isXverse) {
      if (i === 0) return isFinalizedBTC ? 'completed' : 'active';
      return signIntentionsState.isSuccess
        ? 'completed'
        : isFinalizedBTC
          ? 'active'
          : 'pending';
    }
    if (i === 0) return isFinalizedBTC ? 'completed' : 'active';
    if (toSignIntentions[i - 1]?.signedEvmTransaction) return 'completed';
    return isFinalizedBTC &&
      i - 1 === toSignIntentions.findIndex((it) => !it.signedEvmTransaction)
      ? 'active'
      : 'pending';
  };

  return (
    <div className={vstack({ gap: 4 })} data-testid="intention-signer">
      {!(isPending || isSuccess) && (
        <div className={hstack({ gap: 4, justifyContent: 'center' })}>
          {new Array(stepCount).fill(0).map((_, i) => {
            const state = getStepState(i);
            return (
              <div
                key={i}
                className={css({
                  borderRadius: 'full',
                  border: '1px solid',
                  borderColor: 'neutral.400',
                  color: 'neutral.400',
                  width: 8,
                  height: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...(state === 'completed' && {
                    backgroundColor: 'neutral.800',
                    color: 'white',
                  }),
                  ...(state === 'active' && {
                    borderColor: 'neutral.800',
                  }),
                })}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      )}

      {children}

      {!isFinalizedBTC && (
        <>
          <p>Sign BTC transaction</p>
          <Button
            onClick={() => {
              const params: Parameters<typeof finalizeBTCTransaction>[0] = {};
              if (customStateOverride && customStateOverride.length > 0) {
                params.stateOverride = customStateOverride;
              }
              finalizeBTCTransaction(params);
            }}
            disabled={isFinalizingBTC}
            appearance="primary"
          >
            {isFinalizingBTC ? 'Confirming...' : 'Confirm'}
          </Button>
        </>
      )}

      {showSignButton && (
        <>
          <p>Sign transaction intention</p>
          <Button
            disabled={currentSignState.isPending}
            onClick={() => {
              if (isXverse) {
                signIntentionsState.signIntentions({
                  txId: btcTransaction.tx.id,
                });
              } else {
                signIntentionState.signIntention({
                  intention: txToSign!,
                  txId: btcTransaction.tx.id,
                });
              }
            }}
            appearance="primary"
          >
            {currentSignState.isPending ? 'Confirming...' : 'Confirm'}
          </Button>
        </>
      )}

      {isPending && (
        <>
          <p>Waiting for the transaction to be confirmed...</p>
          <a
            href={`${network?.explorerUrl}/tx/${btcTransaction!.tx.id}`}
            target="_blank"
            className={css({
              color: 'blue.500',
              textDecoration: 'underline',
              fontSize: 14,
            })}
          >
            View transaction
          </a>
        </>
      )}

      {isSuccess && (
        <>
          <p>Transaction confirmed</p>

          <Button
            onClick={() => {
              onClose();
            }}
            appearance="primary"
          >
            Close
          </Button>
        </>
      )}
    </div>
  );
};
