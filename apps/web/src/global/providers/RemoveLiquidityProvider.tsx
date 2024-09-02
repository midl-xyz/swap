'use client';

import {
  RemoveLiquidityDialog,
  removeLiquidityDialogAtom,
} from '@/features/liquidity';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { useChainId } from 'wagmi';

export const RemoveLiquidityProvider = () => {
  const chainId = useChainId();
  const dialogStateAtom = useMemo(
    () => removeLiquidityDialogAtom(chainId),
    [chainId],
  );

  const [dialogState, setDialogState] = useAtom(dialogStateAtom);

  if (!dialogState.open) {
    return null;
  }

  return (
    <RemoveLiquidityDialog
      open={dialogState.open}
      onClose={() => {
        setDialogState({ ...dialogState, open: false });
      }}
    />
  );
};
