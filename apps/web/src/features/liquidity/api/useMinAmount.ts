import { useToken } from '@/entities';
import { useSlippage } from '@/features';
import { usePoolShare } from '@/features/liquidity';
import { parseNumberInput } from '@/shared';
import { Address, formatUnits, parseUnits } from 'viem';
import { useChainId } from 'wagmi';

export const useMinAmount = ({
  tokenA,
  tokenB,
  tokenAAmount,
  tokenBAmount,
}: {
  tokenA: Address;
  tokenB: Address;
  tokenAAmount: string;
  tokenBAmount: string;
}) => {
  const [slippage] = useSlippage();
  const chainId = useChainId();

  const tokenAInfo = useToken(tokenA, chainId);
  const tokenBInfo = useToken(tokenB, chainId);

  const parsedTokenAAmount = parseUnits(
    parseNumberInput(tokenAAmount),
    tokenAInfo.decimals,
  );
  const parsedTokenBAmount = parseUnits(
    parseNumberInput(tokenBAmount),
    tokenBInfo.decimals,
  );

  const { reserves } = usePoolShare({
    tokenA,
    tokenB,
    formValues: {
      tokenAAmount: parsedTokenAAmount,
      tokenBAmount: parsedTokenBAmount,
    },
  });

  let minAmountA = 0;
  let minAmountB = 0;

  const quote = (amount: string, reserveA: number, reserveB: number) => {
    const val = (parseFloat(amount) * reserveB) / reserveA;
    return val - val * slippage;
  };

  try {
    const reserveA = parseFloat(
      formatUnits(reserves.tokenA, tokenAInfo.decimals),
    );
    const reserveB = parseFloat(
      formatUnits(reserves.tokenB, tokenBInfo.decimals),
    );

    minAmountA = quote(parseNumberInput(tokenBAmount), reserveB, reserveA);
    minAmountB = quote(parseNumberInput(tokenAAmount), reserveA, reserveB);
  } catch {}

  return {
    minAmountA: minAmountA || 0,
    minAmountB: minAmountB || 0,
  };
};
