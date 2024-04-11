import Image from 'next/image';
import LogoSvg from './assets/Logo.svg';
import LogoBlackSvg from './assets/LogoBlack.svg';

type LogoProps = {
  black?: boolean;
};

export const Logo = ({ black }: LogoProps) => {
  return (
    <Image
      src={black ? LogoBlackSvg : LogoSvg}
      width={LogoSvg.width}
      height={LogoSvg.height}
      alt="V60 Swap"
    />
  );
};
