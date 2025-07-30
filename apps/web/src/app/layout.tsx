import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { css, cx } from '~/styled-system/css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MIDL Swap',
  description: 'Web3 app for swapping Runes on Bitcoin',
  metadataBase: new URL('https://swap.midl.xyz'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'MIDL Swap',
    description: 'Web3 app for swapping Runes on Bitcoin',
    url: 'https://swap.midl.xyz',
    type: 'website',
  },
  twitter: {
    title: 'MIDL Swap',
    description: 'Web3 app for swapping Runes on Bitcoin',
  },
  icons: { icon: '/images/favicon.png' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={css({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <body
        className={cx(
          inter.className,
          css({
            display: 'flex',
            flexDirection: 'column',
            bg: '#FEFEFE',
          }),
        )}
      >
        {children}
      </body>
    </html>
  );
}
