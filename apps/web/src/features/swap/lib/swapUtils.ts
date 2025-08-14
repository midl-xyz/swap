import { Address, zeroAddress } from 'viem';

export const handleSwapTokenApproval = (
  token: { address: Address; amount: bigint },
  rune: any,
  needsApprove: boolean,
  addApproveDepositIntention: any,
  addTxIntention: any,
) => {
  const isETH = token.address === zeroAddress;

  if (isETH) return;

  if (needsApprove) {
    addApproveDepositIntention({
      address: token.address,
      amount: token.amount,
      runeId: rune?.id,
    });
  } else if (rune) {
    addTxIntention(
      {
        intention: {
          deposit: {
            runes: [
              {
                id: rune?.id,
                amount: token.amount,
                address: token.address,
              },
            ],
          },
        },
      },
      {},
    );
  }
};

export const getSwapParams = (
  tokenIn: Address,
  tokenOut: Address,
  amountIn: bigint,
  amountOutMin: bigint,
  to: Address,
  deadline: bigint,
  WETH: Address,
) => {
  if (tokenIn === zeroAddress) {
    return {
      functionName: 'swapExactETHForTokens' as const,
      args: [amountOutMin, [WETH, tokenOut], to, deadline] as const,
      ethValue: amountIn,
    };
  }

  if (tokenOut === zeroAddress) {
    return {
      functionName: 'swapExactTokensForETH' as const,
      args: [amountIn, amountOutMin, [tokenIn, WETH], to, deadline] as const,
      ethValue: 0n,
    };
  }

  return {
    functionName: 'swapExactTokensForTokens' as const,
    args: [amountIn, amountOutMin, [tokenIn, tokenOut], to, deadline] as const,
    ethValue: 0n,
  };
};
