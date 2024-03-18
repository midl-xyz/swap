import { css } from '~/styled-system/css';

export const Liquidity = () => {
  const providedLiquidities: any[] = [];

  return (
    <div>
      {providedLiquidities.length === 0 ? (
        <p
          className={css({
            px: 4,
            py: 2,
            bg: 'neutral.100',
            borderRadius: 'md',
            color: 'neutral.400',
            textAlign: 'center',
          })}
        >
          No liquidity found
        </p>
      ) : (
        <div>
          <h3>My liquidity</h3>
          <div>
            {providedLiquidities.map((liquidity) => (
              <div key={liquidity.id}>
                <p>{liquidity.id}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
