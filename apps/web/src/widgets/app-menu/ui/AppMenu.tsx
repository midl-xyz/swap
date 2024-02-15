'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { css } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';

type AppMenuLink = {
  label: string;
  href: string;
};

const appMenuLinks: AppMenuLink[] = [
  {
    label: 'Swap',
    href: '/',
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
    label: 'About',
    href: '/about',
  },
];

export const AppMenu = () => {
  const pathname = usePathname();

  return (
    <div
      className={hstack({
        gap: 8,
        h: 'full',
      })}
    >
      {appMenuLinks.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className={css({
            display: 'flex',
            alignItems: 'center',
            px: 1,
            h: 'full',
            color: 'neutral.800',
            fontWeight: 'medium',
            borderBottomWidth: 2,
            borderColor: pathname === link.href ? 'neutral.800' : 'transparent',
          })}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
