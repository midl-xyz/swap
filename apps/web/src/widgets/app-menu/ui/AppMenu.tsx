'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { css } from '~/styled-system/css';

type AppMenuLink = {
  label: string;
  href: string;
  isExact?: boolean;
};

const appMenuLinks: AppMenuLink[] = [
  {
    label: 'Swap',
    href: '/',
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
];

export const AppMenuList = () => {
  const pathname = usePathname();
  return (
    <>
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
            borderColor: (
              link.isExact
                ? pathname === link.href
                : pathname.startsWith(link.href)
            )
              ? 'neutral.800'
              : 'transparent',
          })}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};
