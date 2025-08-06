'use client';

import { AppPreloader } from '@/widgets';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Pair = dynamic(() => import('@/widgets/pair').then((mod) => mod.Pair), {
  ssr: false,
});

export default function PairPage({ params }: { params: { id: string } }) {
  if (!params.id) return <AppPreloader />;

  return (
    <Suspense fallback={<AppPreloader />}>
      <Pair id={params.id} />
    </Suspense>
  );
}
