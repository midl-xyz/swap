import { NumberInput } from '@/shared/ui';
import { styled } from '~/styled-system/jsx';

export const SwapInput = styled(
  NumberInput,
  {
    base: {
      textStyle: 'h4',
      flexGrow: 1,
      pl: 1,
      caretColor: 'orange.500',
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  {
    defaultProps: {
      autoComplete: 'off',
    },
  },
);
