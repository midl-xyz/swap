import { SwapForm } from '@/widgets';
import dynamic from 'next/dynamic';
import { css, cx } from '~/styled-system/css';
import { center } from '~/styled-system/patterns';

export default function Home() {
  return (
    <main
      className={cx(
        center(),
        css({
          flexGrow: 1,
        }),
      )}
    >
      <SwapForm />
    </main>
  );
}
