'use client';

import { type FC, useEffect, useRef } from 'react';
import { Button } from '@/shared';
import BackgroundSvg from './assets/background.svg';
import Link from 'next/link';
import { VStack } from '~/styled-system/jsx';

type Props = {
  name: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
};

export default async function SwapPage() {
  return <>Swap is under maintenance</>;
}
