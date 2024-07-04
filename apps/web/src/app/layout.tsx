import { FiatQuotesProvider } from '@/features/fiat-quote';
import {
  RemoveLiquidityProvider,
  SettingsDialogProvider,
  TokenDialogProvider,
  Web3Provider,
} from '@/global';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { Toaster } from 'react-hot-toast';

import { ErrorBoundary } from '@/global/providers/ErrorBoundary';
import { AccountButton, AppMenu, Header, Logo, RPCStatus } from '@/widgets';
import Link from 'next/link';
import { css, cx } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';
import '@rainbow-me/rainbowkit/styles.css';
import './globals.css';
import { renderErrorMessage } from '@/widgets/error-message';
import { Footer } from '@/widgets/footer/ui';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'V60 Swap',
  description: 'Web3 app for swapping ERC20 tokens on the Prom blockchain',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
                  })}
                >
                  <Link href="/">
                    <Logo />
                  </Link>
                  <AppMenu />
                </div>
              }
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
