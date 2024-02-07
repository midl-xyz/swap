import { cva } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';

const buttonStyle = cva({
  base: {
    color: 'blue.400',
  },
  variants: {
    size: {
      small: {
        fontSize: 'sm',
      },
      large: {
        fontSize: 'lg',
      },
    },
  },
});

export const Button = styled('button', buttonStyle);
