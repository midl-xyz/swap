import { hstack } from '~/styled-system/patterns';

type HeaderProps = {
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

export const Header = ({ leftSlot, rightSlot, centerSlot }: HeaderProps) => {
  return (
    <header
      className={hstack({
        alignItems: 'stretch',
        display: 'grid',
        gap: 4,
        px: 4,
        minH: 20,
        bg: 'white',
        gridTemplateColumns: '1fr auto 1fr',
      })}
    >
      {leftSlot}

      {centerSlot}
      {rightSlot && (
        <div
          className={hstack({
            gap: 4,
            justifyContent: 'flex-end',
          })}
        >
          {rightSlot}
        </div>
      )}
    </header>
  );
};
