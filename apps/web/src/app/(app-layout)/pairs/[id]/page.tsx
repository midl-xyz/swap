'use client';

import { AppPreloader } from '@/widgets';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Pair = dynamic(() => import('@/widgets/pair').then((mod) => mod.Pair), {
  ssr: false,
});

const PairPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  if (!params) return <AppPreloader />;
  const { id } = await params;

  return (
    <Suspense fallback={<AppPreloader />}>
      <Pair id={id} />
    </Suspense>
  );
};
export default PairPage;
