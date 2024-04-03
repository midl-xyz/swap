import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { cookieToInitialState } from 'wagmi';

import { FiatQuotesProvider } from '@/features/fiat-quote';
import {
  ConnectWalletProvider,
  TokenDialogProvider,
  Web3Provider,
  wagmiConfig,
} from '@/global';

import { AccountButton, AppMenu, Header, Logo } from '@/widgets';
import Link from 'next/link';
import { css, cx } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';
import './globals.css';

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
  const initialState = cookieToInitialState(
    wagmiConfig,
    headers().get('cookie'),
  );

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
        <Web3Provider initialState={initialState}>
          <FiatQuotesProvider>
            <ConnectWalletProvider />
            <TokenDialogProvider />
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
            {children}
          </FiatQuotesProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
