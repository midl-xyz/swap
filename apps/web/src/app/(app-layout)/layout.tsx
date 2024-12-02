import { FiatQuotesProvider } from '@/features/fiat-quote';
import {
  RemoveLiquidityProvider,
  SettingsDialogProvider,
  TokenDialogProvider,
  Web3Provider,
} from '@/global';
import { MobileAppMenu } from '@/widgets/app-menu/ui/MobileAppMenu';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { ErrorBoundary } from '@/global/providers/ErrorBoundary';
import {
  AccountButton,
  AppMenuList,
  Header,
  Logo,
  RPCStatus,
  Toast,
} from '@/widgets';
import { renderErrorMessage } from '@/widgets/error-message';
import { Footer } from '@/widgets/footer/ui';
import Link from 'next/link';
import { css } from '~/styled-system/css';
import { HStack, Stack } from '~/styled-system/jsx';
import { hstack } from '~/styled-system/patterns';
import '../globals.css';

export const metadata: Metadata = {
  title: 'V60 Swap',
  description: 'Web3 app for swapping ERC20 tokens on the Prom blockchain',
  metadataBase: new URL('https://v60.io'),
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
    url: 'https://v60.io',
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

export default async function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookie = (await headers()).get('cookie') || '';

  return (
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
              <HStack display={{ base: 'none', md: 'flex' }} gap={8} h="full">
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
      <Toast />
    </Web3Provider>
  );
}
