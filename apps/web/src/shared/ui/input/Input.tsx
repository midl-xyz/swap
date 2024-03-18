import { cva } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';

const inputStyle = cva({
  variants: {
    appearance: {
      primary: {},
      secondary: {
        bg: 'white',
        borderRadius: 'xl',
        border: '2px solid',
        borderColor: 'neutral.100',
        px: 4,
        py: 3,
        flexGrow: 1,
        display: 'flex',
        width: '100%',
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
  base: {
    _focus: {
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1)',
    },
    '&::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
});

export const Input = styled('input', inputStyle, {
  defaultProps: {
    appearance: 'primary',
  },
});
