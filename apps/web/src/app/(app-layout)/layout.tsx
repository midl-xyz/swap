import { FiatQuotesProvider } from '@/features/fiat-quote';
import {
  RemoveLiquidityProvider,
  SettingsDialogProvider,
  TokenDialogProvider,
  Web3Provider,
} from '@/global';
import { MobileAppMenu } from '@/widgets/app-menu/ui/MobileAppMenu';
import { headers } from 'next/headers';
import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from '@/global/providers/ErrorBoundary';
import { RuneDialogProvider } from '@/global/providers/RuneDialogProvider';
import { AccountButton, AppMenuList, Header, Logo, RPCStatus } from '@/widgets';
import { renderErrorMessage } from '@/widgets/error-message';
import { Footer } from '@/widgets/footer/ui';
import Link from 'next/link';
import { css } from '~/styled-system/css';
import { HStack, Stack } from '~/styled-system/jsx';
import { hstack } from '~/styled-system/patterns';
import '../globals.css';

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
        <RuneDialogProvider />
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
    </Web3Provider>
  );
}
