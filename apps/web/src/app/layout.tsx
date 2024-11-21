import { AccountButton, AppMenuList, Header, Logo, Toast } from '@/widgets';
import { MobileAppMenu } from '@/widgets/app-menu/ui/MobileAppMenu';
import { Footer } from '@/widgets/footer/ui';
import { BugReportBar } from '@/widgets/header/ui/BugReportBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { css, cx } from '~/styled-system/css';
import { HStack, Stack } from '~/styled-system/jsx';
import { hstack } from '~/styled-system/patterns';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'V60 Swap',
  description: 'Web3 app for swapping ERC20 tokens on the Prom blockchain',
  metadataBase: new URL('https://testnet.v60.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'V60 Swap',
    description: 'Web3 app for swapping ERC20 tokens on the Prom blockchain',
    url: 'https://testnet.v60.io',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'V60 Swap',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V60 Swap',
    description: 'Web3 app for swapping ERC20 tokens on the Prom blockchain',
    images: [
      {
        url: '/twitter-image.png',
        alt: 'V60 Swap',
      },
    ],
  },
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
