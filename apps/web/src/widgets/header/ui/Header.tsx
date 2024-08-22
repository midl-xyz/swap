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
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: 4,
        px: 4,
        minH: 20,
        bg: 'white',
      })}
    >
      {leftSlot}
      {centerSlot}
      {rightSlot}
    </header>
  );
};
