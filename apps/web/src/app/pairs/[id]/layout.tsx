import { css } from '~/styled-system/css';

export default function PairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={css({
        maxWidth: '6xl',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        flexGrow: 1,
        minHeight: '100%',
        paddingTop: 8,
      })}
    >
      {children}
    </div>
  );
}
