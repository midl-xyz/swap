import {
  Button,
  Dialog,
  DialogContent,
  DialogOverlay,
  shortenAddress,
} from '@/shared';
import { useAccounts, useDisconnect } from '@midl-xyz/midl-js-react';
import { DialogProps } from '@radix-ui/react-dialog';
import { Copy, CopyIcon, XIcon } from 'lucide-react';
import { css } from '~/styled-system/css';
import { HStack, VStack } from '~/styled-system/jsx';
import { vstack } from '~/styled-system/patterns';
import { useCopyToClipboard } from 'usehooks-ts';
import toast from 'react-hot-toast';

type AccountDialogProps = DialogProps & {
  onClose: () => void;
};

export const AccountDialog = ({ onClose, ...rest }: AccountDialogProps) => {
  const { accounts } = useAccounts();
  const { disconnect, isPending } = useDisconnect({
    mutation: {
      onSuccess: () => {
        onClose();
      },
    },
  });

  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => {
    try {
      copy(text);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={onClose} />
      <DialogContent
        onEscapeKeyDown={onClose}
        className={css({
          maxW: 450,
          width: '100%',
          backgroundColor: 'neutral.100',
        })}
      >
        <div
          className={vstack({
            gap: 2,
            justifyContent: 'stretch',
          })}
        >
          <HStack
            justifyContent="space-between"
            alignItems="center"
            width="full"
          >
            <h1
              className={css({
                textStyle: 'h3',
              })}
            >
              Connected accounts
            </h1>
            <Button onClick={onClose} appearance="ghost">
              <XIcon width={16} height={16} />
            </Button>
          </HStack>
          <VStack gap={8}>
            <VStack gap={2}>
              {accounts?.map((account) => (
                <div
                  key={account.address}
                  className={css({
                    textStyle: 'caption',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'gray.300',
                    width: 'full',
                  })}
                >
                  {shortenAddress(account.address, 16)}

                  <Button
                    appearance="ghost"
                    onClick={() => {
                      handleCopy(account.address);
                    }}
                  >
                    <CopyIcon width={16} height={16} />
                  </Button>
                </div>
              ))}
            </VStack>

            <Button
              onClick={() => {
                disconnect();
              }}
              className={css({
                alignSelf: 'flex-end',
              })}
            >
              Disconnect
            </Button>
          </VStack>
        </div>
      </DialogContent>
    </Dialog>
  );
};
