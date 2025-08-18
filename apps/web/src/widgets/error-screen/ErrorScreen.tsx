'use client';

import { type FC, useEffect, useRef } from 'react';
import { Button } from '@/shared';
import { gsap } from 'gsap';
import BackgroundSvg from './assets/background.svg';
import Link from 'next/link';
import { VStack } from '~/styled-system/jsx';
import { css } from '~/styled-system/css';

type Props = {
  name: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
};

export const ErrorScreen: FC<Props> = ({
  name,
  description,
  buttonHref,
  buttonText,
}) => {
  return (
    <VStack
      className={css({
        w: '100vw',
        h: '100%',
        bg: 'white',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <VStack
        className={css({
          gap: 15,
          backgroundColor: '#FFFFFFCC',
          backdropFilter: 'blur(0.25px)',
          padding: 12,
          borderRadius: '200px',
        })}
      >
        <VStack gap={2}>
          <span
            className={css({
              fontWeight: 500,
              fontSize: '120px',
              letterSpacing: '0.2px',
              fontVariationSettings: "'wdth' 110",
              color: '#DC7520',
            })}
          >
            {name}
          </span>
          <span className={css({ textStyle: 'subtitle.primary.medium' })}>
            {description}
          </span>
        </VStack>

        {/* <Link href={buttonHref || "/"}>
					<Button appearance="ghost" size="large">
						{buttonText || "Back to main page"}
					</Button>
				</Link> */}
      </VStack>
    </VStack>
  );
};
