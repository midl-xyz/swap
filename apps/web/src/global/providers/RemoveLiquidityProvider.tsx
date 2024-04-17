'use client';

import {
  RemoveLiquidityDialog,
  removeLiquidityDialogAtom,
} from '@/features/liquidity';
import { useAtom } from 'jotai';

export const RemoveLiquidityProvider = () => {
  const [dialogState, setDialogState] = useAtom(removeLiquidityDialogAtom);

  return (
    <RemoveLiquidityDialog
      open={dialogState.open}
      onClose={() => {
        setDialogState({ ...dialogState, open: false });
      }}
    />
  );
};
