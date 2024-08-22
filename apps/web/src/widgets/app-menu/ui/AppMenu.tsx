'use client';

import { AppMenuLink } from '@/widgets/app-menu/ui/AppMenuLink';
import { hstack } from '~/styled-system/patterns';

const appMenuLinks: AppMenuLink[] = [
  // {
  //   label: 'Devnet Portal',
  //   href: 'https://devnet.midl.xyz',
  // },
  // {
  //   label: 'Midlscan',
  //   href: 'https://midlscan.io',
  // },
  {
    label: 'Swap',
    href: '/',
    isExact: true,
  },
  {
    label: 'Liquidity',
    href: '/liquidity',
  },
  {
    label: 'Pairs',
    href: '/pairs',
  },
  // {
  //   label: 'Stable',
  //   href: '/stable',
  // },
  // {
  //   label: 'Lending',
  //   href: '/lending',
  // },
];

export const AppMenu = () => (
  <div
    className={hstack({
      gap: 8,
      h: 'full',
    })}
  >
    {appMenuLinks.map((link) => (
      <AppMenuLink link={link} key={link.label} />
    ))}
  </div>
);
