'use client';

import { useSlippage } from '@/features';
import {
  Button,
  Dialog,
  DialogContent,
  DialogOverlay,
  Input,
  NumberInput,
} from '@/shared';
import { DialogPortal, DialogProps } from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type SlippageControlDialogProps = DialogProps & {
  onClose: () => void;
};

type FormData = {
  slippage: string;
};

export const SlippageControlDialog = ({
  onClose,
  ...rest
}: SlippageControlDialogProps) => {
  const [slippage, setSlippage] = useSlippage();
  const { handleSubmit, register, setValue } = useForm<FormData>({
    defaultValues: {
      slippage: parseFloat((slippage * 100).toFixed(2)).toString(),
    },
  });

  const updateSlippage = (slippage: number) => {
    setValue('slippage', parseFloat((slippage * 100).toFixed(2)).toString());
  };

  const onSubmit = (value: FormData) => {
    setSlippage(parseFloat(value.slippage) / 100);
    onClose();
  };

  return (
    <Dialog {...rest} modal>
      <DialogPortal>
        <DialogOverlay onClick={onClose} />
        <DialogContent
          onEscapeKeyDown={onClose}
          className={css({
            maxW: 400,
            width: '100%',
          })}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={vstack({
              gap: 8,
              justifyContent: 'stretch',
            })}
          >
            <h1
              className={css({
                textStyle: 'h3',
              })}
            >
              Settings
            </h1>
            <div className={hstack({ gap: 4 })}>
              <Button
                onClick={() => updateSlippage(0.001)}
                appearance="secondary"
              >
                0.1%
              </Button>
              <Button
                onClick={() => updateSlippage(0.005)}
                appearance="secondary"
              >
                0.5%
              </Button>
              <Button
                onClick={() => updateSlippage(0.01)}
                appearance="secondary"
              >
                1%
              </Button>
              <div
                className={css({
                  position: 'relative',
                })}
              >
                <NumberInput
                  max={100}
                  precision={2}
                  appearance="tertiary"
                  {...register('slippage')}
                  className={css({
                    paddingEnd: 2,
                  })}
                />
                <span
                  className={css({
                    position: 'absolute',
                    right: 2,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'neutral.400',
                  })}
                >
                  %
                </span>
              </div>
            </div>
            <Button
              type="submit"
              className={css({
                alignSelf: 'flex-end',
              })}
            >
              Save
            </Button>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
