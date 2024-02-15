import { cva } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';

const buttonStyle = cva({
  defaultVariants: {
    appearance: 'primary',
    size: 'medium',
  },
  base: {
    fontWeight: 'medium',
    _hover: {
      cursor: 'pointer',
    },
    _disabled: {
      bg: 'neutral.300',
    },
  },
  variants: {
    appearance: {
      primary: {
        backgroundColor: 'neutral.800',
        color: 'white',
        _hover: {
          backgroundColor: 'neutral.950',
        },
      },
    },
    size: {
      small: {
        fontSize: 'sm',
      },
      medium: {
        h: 11,
        px: 4,
        py: 2,
        borderRadius: 'lg',
        fontSize: 'md',
      },
      large: {
        fontSize: 'lg',
      },
    },
  },
});

export const Button = styled('button', buttonStyle);
