import { TokenLogo } from '@/features';
import { IntentionSigner } from '@/features/btc/ui/IntentionSigner';
import { useRuneDialog } from '@/features/runes/api';
import { Button, Dialog, DialogContent, DialogOverlay } from '@/shared';
import {
  useAddRuneERC20Intention,
  useClearTxIntentions,
} from '@midl-xyz/midl-js-executor-react';
import { useRune } from '@midl-xyz/midl-js-react';
import { DialogProps, DialogTitle } from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type AddRuneDialogProps = DialogProps & {
  onClose: () => void;
};

export const AddRuneDialog = ({ onClose, ...rest }: AddRuneDialogProps) => {
  const { state } = useRuneDialog();
  const [isIntentionMode, setIsIntentionMode] = useState(false);
  const clearIntentions = useClearTxIntentions();

  const { rune } = useRune({
    runeId: state.value.runeId,
    query: {
      enabled: Boolean(state.value.runeId),
    },
  });

  const { addRuneERC20Async, isPending: isTransactionBeingFormed } =
    useAddRuneERC20Intention({
      mutation: {
        onError(error: any) {
          console.error(error);
          toast.error(error.message);
        },
      },
    });

  const onConfirm = async () => {
    try {
      await addRuneERC20Async({
        runeId: rune!.id,
      });
      setIsIntentionMode(true);
    } catch {
      // Handled by the mutation's onError
    }
  };

  useEffect(() => {
    if (!rest.open) {
      return;
    }

    setIsIntentionMode(false);
    clearIntentions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest.open, state.value.runeId]);

  const handleClose = () => {
    clearIntentions();
    onClose();
    setIsIntentionMode(false);
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
        {isIntentionMode ? (
          <div
            className={vstack({
              gap: 4,
              justifyContent: 'stretch',
            })}
          >
            <DialogTitle asChild>
              <h1
                className={css({
                  textStyle: 'h3',
                })}
              >
                Sign add rune intentions
              </h1>
            </DialogTitle>

            <IntentionSigner onClose={handleClose}>
              <div
                className={vstack({
                  gap: 2,
                  alignItems: 'center',
                })}
              >
                <TokenLogo runeId={rune?.id} size={12} />
                <p>
                  Adding <b>{rune?.spaced_name}</b> to MIDL
                </p>
              </div>
            </IntentionSigner>
          </div>
        ) : (
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

            <p>
              You are about to add <b>{rune?.spaced_name}</b> ({rune?.symbol})
              to the MIDL ecosystem. This will create an ERC-20 representation
              of the rune.
            </p>

            <Button
              width="full"
              disabled={isTransactionBeingFormed}
              onClick={onConfirm}
            >
              {isTransactionBeingFormed ? 'Preparing...' : 'Add token'}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
