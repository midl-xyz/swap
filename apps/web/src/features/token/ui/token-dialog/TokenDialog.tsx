import { TokenSelect } from '@/features';
import { Button, Dialog, DialogContent, DialogOverlay } from '@/shared';
import { DialogProps } from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { css } from '~/styled-system/css';
import { HStack } from '~/styled-system/jsx';
import { vstack } from '~/styled-system/patterns';

type TokenDialogProps = DialogProps & {
  onClose: () => void;
  onTokenSelect: (address: string, chainId: number) => void;
};

export const TokenDialog = ({
  onClose,
  onTokenSelect,
  ...rest
}: TokenDialogProps) => {
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
              Select rune
            </h1>
            <Button onClick={onClose} appearance="ghost">
              <XIcon width={16} height={16} />
            </Button>
          </HStack>
          <TokenSelect onSelect={onTokenSelect} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
