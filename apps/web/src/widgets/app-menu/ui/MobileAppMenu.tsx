'use client';

import { Dialog, DialogContent, DialogOverlay } from '@/shared';
import { AppMenuList } from '@/widgets';
import { ConnectButton } from '@midl-xyz/satoshi-kit';
import { X } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';

const isTestEnv =
  typeof process !== 'undefined' &&
  (process.env.VITEST ||
    process.env.VITEST_WORKER_ID ||
    process.env.NODE_ENV === 'test');
import { Stack, VStack } from '~/styled-system/jsx';
import MenuIcon from '../assets/menu.svg';

const Wallet: FC<{ onClick: () => void }> = ({ onClick }) => {
  return <ConnectButton beforeConnect={onClick} />;
};

export const MobileAppMenu = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <Stack>
      {isTestEnv ? (
        <img
          onClick={handleToggle}
          src="/menu.svg"
          alt="menu-button"
          width={24}
          height={24}
        />
      ) : (
        <Image
          onClick={handleToggle}
          src={MenuIcon as any}
          alt="menu-button"
          width={(MenuIcon as any).width}
          height={(MenuIcon as any).height}
        />
      )}
      <Dialog open={open}>
        <DialogOverlay onClick={handleToggle} data-testid="dialog-overlay" />
        <DialogContent
          onEscapeKeyDown={handleToggle}
          width="100%"
          height="100%"
          data-testid="dialog-content"
        >
          <X data-testid="close-icon" onClick={handleToggle} />
          <VStack width="100%" gap={5}>
            <VStack width="100%" gap={5}>
              <AppMenuList onClick={handleToggle} />
            </VStack>

            <Wallet onClick={() => setOpen(false)} />
          </VStack>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};
