import { FiatQuotesProvider } from '@/features/fiat-quote';
import {
  RemoveLiquidityProvider,
  SettingsDialogProvider,
  TokenDialogProvider,
  Web3Provider,
} from '@/global';
import { MobileAppMenu } from '@/widgets/app-menu/ui/MobileAppMenu';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { ErrorBoundary } from '@/global/providers/ErrorBoundary';
import { AccountButton, AppMenuList, Header, Logo, RPCStatus } from '@/widgets';
import Link from 'next/link';
import { css, cx } from '~/styled-system/css';
import { HStack, Stack } from '~/styled-system/jsx';
import { hstack } from '~/styled-system/patterns';
import '@rainbow-me/rainbowkit/styles.css';
import './globals.css';
import { renderErrorMessage } from '@/widgets/error-message';
import { Footer } from '@/widgets/footer/ui';
import { BugReportBar } from '@/widgets/header/ui/BugReportBar';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookie = headers().get('cookie') || '';

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
            bg: 'neutral.50',
          }),
        )}
      >
        <Web3Provider cookie={cookie}>
          <FiatQuotesProvider>
            <TokenDialogProvider />
            <SettingsDialogProvider />
            <RemoveLiquidityProvider />
            <RPCStatus />
            <Header
              leftSlot={
                <div
                  className={hstack({
                    gap: 24,
                    flexShrink: 0,
                    width: {
                      base: '100%',
                      md: 'fit-content',
                    },
                    justifyContent: 'space-between',
                  })}
                >
                  <Link href="/">
                    <Logo />
                  </Link>
                  <HStack
                    display={{ base: 'none', md: 'flex' }}
                    gap={8}
                    h="full"
                  >
                    <AppMenuList />
                  </HStack>
                  <Stack display={{ base: 'flex', md: 'none' }}>
                    <MobileAppMenu />
                  </Stack>
                </div>
              }
              rightSlot={
                <HStack gap={4} display={{ base: 'none', md: 'flex' }}>
                  <AccountButton />
                </HStack>
              }
            />
            <BugReportBar />
            <Toaster position="bottom-right" />
            <ErrorBoundary fallback={renderErrorMessage}>
              <div
                className={css({
                  paddingBlock: 4,
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                })}
              >
                {children}
              </div>
              <Footer />
            </ErrorBoundary>
          </FiatQuotesProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
