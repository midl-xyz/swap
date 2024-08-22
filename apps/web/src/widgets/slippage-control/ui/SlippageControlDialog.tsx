'use client';

import { Button, Dialog, DialogContent, DialogOverlay } from '@/shared';
import { SlippageControlForm } from '@/widgets/slippage-control/ui/SlippageControlForm';
import { DialogPortal, DialogProps } from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type SlippageControlDialogProps = DialogProps & {
  onClose: () => void;
};

export const SlippageControlDialog = ({
  onClose,
  ...rest
}: SlippageControlDialogProps) => {
  return (
    <Dialog {...rest}>
      <DialogPortal>
        <DialogOverlay onClick={onClose} />
        <DialogContent
          onEscapeKeyDown={onClose}
          className={css({
            maxW: 400,
            width: '100%',
          })}
        >
          <div
            className={vstack({
              gap: 8,
              justifyContent: 'stretch',
            })}
          >
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 'full',
              })}
            >
              <h1
                className={css({
                  textStyle: 'h3',
                })}
              >
                Maximum slippage
              </h1>
              <Button onClick={onClose} appearance="ghost">
                <XIcon width={16} height={16} />
              </Button>
            </div>

            <SlippageControlForm onClose={onClose} />
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
