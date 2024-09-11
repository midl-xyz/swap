'use client';

import { Pair } from '@/widgets/pair';

const PairPage = ({ params: { id } }: { params: { id: string } }) => {
  return <Pair id={id} />;
};

export default PairPage;
