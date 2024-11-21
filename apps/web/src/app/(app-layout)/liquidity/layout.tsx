import { cx } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

export default function LiquidityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={cx(
        vstack({
          flexGrow: 1,
          alignItems: 'center',
          py: 10,
        }),
      )}
    >
      <div
        className={vstack({
          width: 'full',
          maxWidth: 640,
          alignItems: 'stretch',
          gap: 4,
        })}
      >
        {children}
      </div>
    </main>
  );
}
