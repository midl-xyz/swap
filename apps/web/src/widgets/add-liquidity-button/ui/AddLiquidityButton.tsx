'use client';

import { Button } from '@/shared';
import Link from 'next/link';

export const AddLiquidityButton = () => {
  return (
    <Link href="/liquidity/new">
      <Button appearance="tertiary">Add Liquidity</Button>
    </Link>
  );
};
