import { Pairs } from '@/widgets/pairs';
import { css } from '~/styled-system/css';

export default function PairsPage() {
  return (
    <div
      className={css({
        maxWidth: '5xl',
        marginInline: 'auto',
        width: 'full',
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      })}
    >
      <h1
        className={css({
          textStyle: 'h2',
        })}
      >
        All Pairs
      </h1>
      <Pairs />
    </div>
  );
}
