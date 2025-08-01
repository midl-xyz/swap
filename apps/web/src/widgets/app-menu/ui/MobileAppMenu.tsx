'use client';

import { Dialog, DialogContent, DialogOverlay } from '@/shared';
import { AppMenuList } from '@/widgets';
import { xverseConnector } from '@midl-xyz/midl-js-connectors';
import { useAddNetwork, useConfig } from '@midl-xyz/midl-js-react';
import { ConnectButton } from '@midl-xyz/satoshi-kit';
import { X } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';
import { Stack, VStack } from '~/styled-system/jsx';
import MenuIcon from '../assets/menu.svg';

const Wallet: FC<{ onClick: () => void }> = ({ onClick }) => {
  const { addNetworkAsync } = useAddNetwork();
  const { network } = useConfig();

  return (
    <ConnectButton
      beforeConnect={async (connectorId) => {
        if (connectorId !== xverseConnector().id) {
          onClick();
          return;
        }

        await addNetworkAsync({
          connectorId,
          networkConfig: {
            name: 'MIDL Regtest',
            network: network.id,
            rpcUrl: 'https://mempool.regtest.midl.xyz/api',
            indexerUrl: 'https://api-regtest-midl.xverse.app',
          },
        });
        onClick();
      }}
    />
  );
};

export const MobileAppMenu = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <Stack>
      <Image
        onClick={handleToggle}
        src={MenuIcon}
        alt="menu-button"
        width={MenuIcon.width}
        height={MenuIcon.height}
      />
      <Dialog open={open}>
        <DialogOverlay onClick={handleToggle} />
        <DialogContent
          onEscapeKeyDown={handleToggle}
          width="100%"
          height="100%"
        >
          <X onClick={handleToggle} />
          <VStack width="100%" gap={5}>
            <VStack width="100%" gap={5}>
              <AppMenuList onToggleModal={handleToggle} />
            </VStack>

            <Wallet onClick={() => setOpen(false)} />
          </VStack>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};
