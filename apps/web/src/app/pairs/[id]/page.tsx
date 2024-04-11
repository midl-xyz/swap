'use client';

import { useGetPair } from '@/features/liquidity';
import { PairFullInfo } from '@/widgets/pairs/ui/PairFullInfo';
import { Loader2Icon } from 'lucide-react';
import { css } from '~/styled-system/css';

export default function PairPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const { data: pairData, isFetching } = useGetPair(id.toLowerCase());

  const pair = pairData?.pair;

  if (isFetching) {
    return (
      <div
        className={css({
          color: 'neutral.500',
          padding: 4,
          borderRadius: 'xl',
          backgroundColor: 'neutral.100',
          display: 'flex',
          verticalAlign: 'middle',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          flexGrow: 1,
          height: '100%',
        })}
      >
        <Loader2Icon
          className={css({
            animation: 'spin 1s linear infinite',
            display: 'inline-block',
            verticalAlign: 'middle',
          })}
        />
        <span>Loading...</span>
      </div>
    );
  }

  if (!pair) {
    return <div>Pair not found</div>;
  }

  return (
    <div>
      <PairFullInfo pair={pair} />
    </div>
  );
}
