import { ReactNode } from 'react';
import { css } from '~/styled-system/css';
import { Stack, VStack } from '~/styled-system/jsx';

interface Props {
  children: ReactNode;
  name: string;
}

export const PairField = ({ children, name }: Props) => {
  return (
    <VStack
      alignItems="baseline"
      gap={5}
      background="#F8F8F8"
      padding={5}
      borderRadius="xl"
      width="100%"
    >
      <span
        className={css({
          textStyle: 'body',
        })}
      >
        {name}
      </span>
      {children}
    </VStack>
  );
};
