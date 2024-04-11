'use client';

import { useSlippage } from '@/features';
import { isSlippageDialogOpen } from '@/features/slippage/model';
import { Button } from '@/shared';
import { useAtom } from 'jotai';
import { PencilIcon } from 'lucide-react';
import { hstack } from '~/styled-system/patterns';

export const SlippageControl = () => {
  const [slippage] = useSlippage();
  const [, setDialogOpen] = useAtom(isSlippageDialogOpen);

  return (
    <div
      className={hstack({
        justifyContent: 'space-between',
      })}
    >
      <div>
        Max. slippage
        <Button
          onClick={() => setDialogOpen(true)}
          appearance="ghost"
          aria-label="Edit slippage"
        >
          <PencilIcon width={12} height={12} />
        </Button>
      </div>
      <span>{parseFloat((slippage * 100).toFixed(2))}%</span>
    </div>
  );
};
