import { AddLiquidityButton } from '@/widgets/add-liquidity-button';
import { Liquidity } from '@/widgets/liquidity';
import { css, cx } from '~/styled-system/css';
import { center, hstack, vstack } from '~/styled-system/patterns';

export default function LiquidityPage() {
  return (
    <>
      <div
        className={hstack({
          gap: 24,
          justifyContent: 'space-between',
        })}
      >
        <h1
          className={css({
            textStyle: 'h2',
          })}
        >
          My Liquidity
        </h1>
        <AddLiquidityButton />
      </div>

      <Liquidity />
    </>
  );
}
