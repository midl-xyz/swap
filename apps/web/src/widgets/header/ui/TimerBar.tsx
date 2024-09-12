'use client';
import { parseSecondsToHuman } from '@/shared';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { css } from '~/styled-system/css';
import { HStack } from '~/styled-system/jsx';
import { InfoIcon } from 'lucide-react';

const releaseTime = 1726221600;

export const TimeBar = () => {
  const [timeLeft, setTimeLeft] = useState(
    releaseTime - Math.floor(+new Date() / 1000),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Math.floor(+new Date() / 1000);
      const remainingTime = releaseTime - currentTime;

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        setTimeLeft(0); // Set time to 0 when the release time is reached
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const humanTimeLeft = parseSecondsToHuman(timeLeft);
  return (
    <HStack
      background="#FF927A"
      width="full"
      textAlign="center"
      paddingBlock={3}
      paddingInline={12}
      color={'#FEFEFE'}
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontWeight={600}
      gap={8}
    >
      <HStack gap={2}>
        <p className={css({})}>Stress test is coming to V60</p>
        <Link target="_blank" href="https://form.jotform.com/242532370066047">
          <InfoIcon />
        </Link>
      </HStack>

      <p
        className={css({
          border: '2px solid #FEFEFE',
          borderRadius: '12px',
          paddingInline: 2,
          paddingBlock: 1,
          width: '107px',
        })}
      >
        {humanTimeLeft}
      </p>
    </HStack>
  );
};
