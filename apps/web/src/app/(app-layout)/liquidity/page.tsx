import { AddLiquidityButton } from '@/widgets/add-liquidity-button';
import { Liquidity } from '@/widgets/liquidity';
import { css } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';

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
