'use client';

import { Button } from '@/shared/ui/button';
import { ErrorBackground } from '@/widgets/error-screen/ErrorBackground';
import { gsap } from 'gsap';
import Link from 'next/link';
import { FC, useEffect, useRef } from 'react';
import { css } from '~/styled-system/css';
import { VStack, Stack } from '~/styled-system/jsx';

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
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGPathElement>('path');
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();

      path.setAttribute('stroke-dasharray', length.toString());
      path.setAttribute('stroke-dashoffset', length.toString());

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: Math.random() * 2 + 1, // random between 1–3s
        delay: Math.random() * 2, // random 0–2s
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <VStack
      className={css({
        w: '100vw',
        h: '100vh',
        bg: 'white',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <ErrorBackground
        ref={svgRef}
        className={css({
          w: '100%',
          h: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        })}
      />

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
          <Stack
            fontWeight={500}
            fontSize="120px"
            letterSpacing="0.2px"
            fontVariationSettings="'wdth' 110"
            color="#DC7520"
          >
            {name}
          </Stack>
          <Stack textStyle="subtitle.primary.medium">{description}</Stack>
        </VStack>

        <Link href={buttonHref || '/'}>
          <Button appearance="primary" size="large">
            {buttonText || 'Back to main page'}
          </Button>
        </Link>
      </VStack>
    </VStack>
  );
};
