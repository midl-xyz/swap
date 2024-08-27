import { FiatQuotesProvider } from '@/features/fiat-quote';
import {
  RemoveLiquidityProvider,
  SettingsDialogProvider,
  TokenDialogProvider,
  Web3Provider,
} from '@/global';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { ErrorBoundary } from '@/global/providers/ErrorBoundary';
import { AccountButton, AppMenu, Header, Logo, RPCStatus } from '@/widgets';
import Link from 'next/link';
import { css, cx } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';
import './globals.css';
import { renderErrorMessage } from '@/widgets/error-message';
import { Footer } from '@/widgets/footer/ui';
import { euclidFonts } from '@/shared/assets/fonts/euclid/euclid';

export const metadata: Metadata = {
  title: 'MIDL Swap',
  description: 'Web3 app for swapping tokens on the MIDL',
  metadataBase: new URL('https://testnet.v60.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'MIDL Swap',
    description: 'Web3 app for swapping tokens on the MIDL',
    url: 'https://testnet.v60.io',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MIDL Swap',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIDL Swap',
    description: 'Web3 app for swapping ERC20 tokens on the Prom blockchain',
    images: [
      {
        url: '/twitter-image.png',
        alt: 'MIDL Swap',
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
          euclidFonts.className,
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
                  })}
                >
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
              }
              centerSlot={<AppMenu />}
              rightSlot={
                <div className={hstack({ gap: 4 })}>
                  <AccountButton />
                </div>
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
        </Web3Provider>
      </body>
    </html>
  );
}
