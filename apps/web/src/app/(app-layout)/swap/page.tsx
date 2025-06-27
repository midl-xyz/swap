'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { css, cx } from '~/styled-system/css';
import { center } from '~/styled-system/patterns';

const SwapForm = dynamic(
  () => import('@/widgets/swap-form/ui/SwapForm').then((mod) => mod.SwapForm),
  { ssr: false },
);

export default function SwapPage() {
  return (
    <main
      className={cx(
        center(),
        css({
          flexGrow: 1,
        }),
      )}
    >
      <Suspense>
        <SwapForm />
      </Suspense>
    </main>
  );
}
