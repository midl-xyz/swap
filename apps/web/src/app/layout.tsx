import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { cookieToInitialState } from 'wagmi';

import { Web3Provider, wagmiConfig } from '@/global';

import { Header, Logo } from '@/widgets';
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
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider initialState={initialState}>
          <Header leftSlot={<Logo />} />
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
