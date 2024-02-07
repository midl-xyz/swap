import { hstack } from '~/styled-system/patterns';

type HeaderProps = {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

export const Header = ({ leftSlot, rightSlot }: HeaderProps) => {
  return (
    <header className={hstack()}>
      {leftSlot}
      {rightSlot}
    </header>
  );
};
