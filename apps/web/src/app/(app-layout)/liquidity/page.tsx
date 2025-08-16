'use client';

import { Button } from '@/shared';
import { AppPreloader } from '@/widgets';
import { Liquidity } from '@/widgets/liquidity';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';
import { Suspense } from 'react';
import { css } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';

export default function LiquidityPage() {
  const router = useRouter();

  // return (
  //   <>
  //     <div
  //       className={hstack({
  //         gap: 24,
  //         justifyContent: 'space-between',
  //       })}
  //     >
  //       <h1
  //         className={css({
  //           textStyle: 'h2',
  //         })}
  //       >
  //         My Liquidity
  //       </h1>
  //       {/* Imperatively navigate to "/liquidity/new" when the button is clicked */}
  //       <Button
  //         appearance="tertiary"
  //         onClick={() =>
  //           startTransition(() => {
  //             router.push('/liquidity/new');
  //           })
  //         }
  //       >
  //         Add Liquidity
  //       </Button>
  //     </div>

  //     <Suspense fallback={<AppPreloader />}>
  //       <Liquidity />
  //     </Suspense>
  //   </>
  // );
}
