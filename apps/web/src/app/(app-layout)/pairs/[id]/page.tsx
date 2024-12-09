'use client';

import { Pair } from '@/widgets/pair';

const PairPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <Pair id={id} />;
};

export default PairPage;
