'use client';

import { AppMenuLink } from '@/widgets/app-menu/ui/AppMenuLink';

type AppMenuLinkParams = {
  label: string;
  href: string;
  isExact?: boolean;
  openOnSeparateTab?: boolean;
};

const appMenuLinks: AppMenuLinkParams[] = [
  {
    label: 'Swap',
    href: '/swap',
    isExact: true,
  },
  {
    label: 'My Liquidity',
    href: '/liquidity',
  },
  {
    label: 'All Pairs',
    href: '/pairs',
  },
  {
    label: 'Stable',
    href: 'https://stable.midl.xyz',
    openOnSeparateTab: true,
  },
  {
    label: 'Guide',
    href: 'https://medium.com/midl-xyz/pioneer-the-midl-testnet-56c412486f08',
    openOnSeparateTab: true,
  },
  {
    label: 'Earn Midl',
    href: 'https://bootstrap.midl.xyz',
    openOnSeparateTab: true,
  },
];

interface Props {
  onToggleModal?: () => void;
}

export const AppMenuList = ({ onToggleModal }: Props) => {
  return (
    <>
      {appMenuLinks.map((link) => (
        <AppMenuLink link={link} key={link.label} />
      ))}
    </>
  );
};
