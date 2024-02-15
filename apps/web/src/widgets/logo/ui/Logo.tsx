import Image from 'next/image';
import LogoSvg from './assets/Logo.svg';

export const Logo = () => {
  return (
    <Image
      src={LogoSvg.src}
      width={LogoSvg.width}
      height={LogoSvg.height}
      alt="V60 Swap"
    />
  );
};
