'use client';

import { SwapForm } from '@/widgets';
import { Suspense } from 'react';
import { css, cx } from '~/styled-system/css';
import { center } from '~/styled-system/patterns';

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
