import { styled } from '~/styled-system/jsx';

export const Input = styled('input', {
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
