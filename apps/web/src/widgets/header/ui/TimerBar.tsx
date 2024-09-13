'use client';
import { parseSecondsToHuman } from '@/shared';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { css } from '~/styled-system/css';
import { HStack } from '~/styled-system/jsx';
import { InfoIcon } from 'lucide-react';

const initialReleaseTime = 1726221600; // This is the initial release time (in UNIX timestamp)

export const TimeBar = () => {
  const [timeLeft, setTimeLeft] = useState(
    initialReleaseTime - Math.floor(+new Date() / 1000),
  );
  const [releaseState, setReleaseState] = useState('pre-release'); // 'pre-release', 'live', 'post-release'

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Math.floor(+new Date() / 1000);
      const remainingTime = initialReleaseTime - currentTime;

      if (releaseState === 'pre-release') {
        // Pre-release state logic
        if (remainingTime <= 0) {
          // When the release time is reached, start the next 30 minutes countdown
          setReleaseState('live');
          const timeSinceRelease = currentTime - initialReleaseTime;
          const timeLeftForLive = 30 * 60 - timeSinceRelease; // 30 minutes minus time already passed
          setTimeLeft(timeLeftForLive > 0 ? timeLeftForLive : 0); // Ensure non-negative time
        } else {
          // Continue showing pre-release countdown
          setTimeLeft(remainingTime);
        }
      } else if (releaseState === 'live') {
        // Live state logic
        if (timeLeft <= 0) {
          // After 30 minutes, switch to post-release state
          setReleaseState('post-release');
          setTimeLeft(0);
          clearInterval(intervalId); // Stop the timer
        } else {
          // Decrease the time left for the live state
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [releaseState, timeLeft]);

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
      {releaseState === 'pre-release' && (
        <HStack gap={2}>
          <p className={css({})}>Stress test is coming to V60</p>
          <Link
            target="_blank"
            href="https://prom-io.medium.com/prom-stress-test-full-guide-365649771c2c"
          >
            <InfoIcon />
          </Link>
        </HStack>
      )}

      {releaseState === 'live' && (
        <>
          <HStack gap={2}>
            <p className={css({})}>Stress Test Is Now Live</p>
            <Link
              target="_blank"
              href="https://prom-io.medium.com/prom-stress-test-full-guide-365649771c2c"
            >
              <InfoIcon />
            </Link>
          </HStack>

          <button
            className={css({
              backgroundColor: '#FFF',
              color: '#FF927A',
              borderRadius: '8px',
              padding: '8px 16px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            })}
          >
            <Link href="/liquidity/new">Add Liquidity</Link>
          </button>
        </>
      )}

      {releaseState === 'post-release' && (
        <HStack gap={2}>
          <p className={css({})}>
            Stress Test is Finished! Thank you for participating! You can now
            continue trading as usual.
          </p>
          <Link
            target="_blank"
            href="https://prom-io.medium.com/prom-stress-test-full-guide-365649771c2c"
          >
            <InfoIcon />
          </Link>
        </HStack>
      )}

      {releaseState !== 'post-release' && (
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
      )}
    </HStack>
  );
};
