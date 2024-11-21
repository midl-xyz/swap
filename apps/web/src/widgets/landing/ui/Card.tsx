import { Button } from '@/shared';
import Link from 'next/link';
import { ReactNode } from 'react';
import { css } from '~/styled-system/css';
import { VStack } from '~/styled-system/jsx';

interface Props {
  img: string;
  title: string;
  description: string;
  button: ReactNode;
  link: string;
}

export const Card = ({ img, button, link, title, description }: Props) => {
  return (
    <VStack
      background="#ECEDEE"
      padding={{
        base: 4,
        md: 8,
      }}
      borderRadius="20px"
      height="fit-content"
      alignItems="baseline"
    >
      <img
        style={{
          borderRadius: '20px',
          minHeight: '268px',
          objectFit: 'cover',
          objectPosition: 'top',
        }}
        src={img}
        alt={title}
      />
      <VStack alignItems="baseline">
        <span
          className={css({
            textStyle: 'subtitle1',
          })}
        >
          {title}
        </span>
        <span
          className={css({
            textStyle: 'body',
          })}
        >
          {description}
        </span>
        <Link
          href={link}
          style={{
            width: '100%',
            maxWidth: '240px',
          }}
        >
          <Button fontSize="14px" width="100%">
            {button}
          </Button>
        </Link>
      </VStack>
    </VStack>
  );
};
