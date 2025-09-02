'use client';
import { FiatQuotesProvider } from '@/features/fiat-quote';
import {
  RemoveLiquidityProvider,
  SettingsDialogProvider,
  TokenDialogProvider,
  Web3Provider,
} from '@/global';
import { ErrorBoundary } from '@/global/providers/ErrorBoundary';
import { RuneDialogProvider } from '@/global/providers/RuneDialogProvider';
import { AppMenuList, AppPreloader, Header, Logo } from '@/widgets';
import { MobileAppMenu } from '@/widgets/app-menu/ui/MobileAppMenu';
import { renderErrorMessage } from '@/widgets/error-message';
import { Footer } from '@/widgets/footer/ui';
import { xverseConnector } from '@midl-xyz/midl-js-connectors';
import { useAddNetwork, useConfig } from '@midl-xyz/midl-js-react';
import { ConnectButton } from '@midl-xyz/satoshi-kit';
import '@midl-xyz/satoshi-kit/styles.css';
import Link from 'next/link';
import { Suspense, type ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { css } from '~/styled-system/css';
import { HStack, Stack } from '~/styled-system/jsx';
import { hstack } from '~/styled-system/patterns';
import '../globals.css';

const Wallet = () => {
  const { addNetworkAsync } = useAddNetwork();
  const { network } = useConfig();

  return (
    <ConnectButton
      beforeConnect={async (connectorId) => {
        if (connectorId !== xverseConnector().id) {
          return;
        }

        await addNetworkAsync({
          connectorId,
          networkConfig: {
            name: 'MIDL Regtest',
            network: network.id,
            rpcUrl: `${
              process.env.NEXT_PUBLIC_MEMPOOL_RPC ||
              'https://mempool.regtest.midl.xyz'
            }/api`,
            indexerUrl:
              process.env.NEXT_PUBLIC_INDEXER_URL ||
              'https://api-regtest-midl.xverse.app',
          },
        });
      }}
    />
  );
};

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Suspense fallback={<AppPreloader />}>
      <Web3Provider>
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
              <Wallet />
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
            <TokenDialogProvider />
            <RuneDialogProvider />
            <SettingsDialogProvider />
            <RemoveLiquidityProvider />
            <FiatQuotesProvider>{children}</FiatQuotesProvider>
          </div>
          <Footer />
        </ErrorBoundary>
      </Web3Provider>
    </Suspense>
  );
}
