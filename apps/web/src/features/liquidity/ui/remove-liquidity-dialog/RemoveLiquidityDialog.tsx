import { DialogContent, Dialog, DialogOverlay } from '@/shared';
import { DialogProps } from '@radix-ui/react-dialog';
import { css } from '~/styled-system/css';

type RemoveLiquidityDialogProps = {
  onClose?: () => void;
} & DialogProps;

export const RemoveLiquidityDialog = ({
  onClose,
  ...rest
}: RemoveLiquidityDialogProps) => {
  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={onClose} />
      <DialogContent
        onEscapeKeyDown={onClose}
        className={css({
          width: 'full',
          maxWidth: 450,
        })}
      ></DialogContent>
    </Dialog>
  );
};
