'use client';

import { Button } from '@/shared';
import Link from 'next/link';

export const AddLiquidityButton = () => {
  return (
    <Link href="/liquidity/new">
      <Button appearance="primary">Add Liquidity</Button>
    </Link>
  );
};
