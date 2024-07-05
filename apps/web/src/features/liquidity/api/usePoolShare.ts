import { useToken } from '@/entities';
import { useGetLPTokenAddress, useGetPairStats } from '@/features/liquidity';
import { Address, formatUnits, parseUnits } from 'viem';
import { useAccount, useChainId } from 'wagmi';

export const usePoolShare = ({
  tokenA,
  tokenB,
  formValues,
}: {
  tokenA?: Address;
  tokenB?: Address;
  formValues: {
    tokenAAmount: bigint;
    tokenBAmount: bigint;
  };
}) => {
  const poolToken = useGetLPTokenAddress({ tokenA, tokenB });
  const { address } = useAccount();
  const chainId = useChainId();
  const poolTokenInfo = useToken(poolToken.data as Address, chainId);
  const tokenAInfo = useToken(tokenA as Address, chainId);
  const tokenBInfo = useToken(tokenB as Address, chainId);

  const { data, refetch } = useGetPairStats({
    lpTokenAddress: poolToken.data as Address,
    tokenA,
    tokenB,
    userAddress: address as Address,
  });

  const lpTokeBalance = parseFloat(
    formatUnits(data.balances.lpToken, poolTokenInfo.decimals),
  );

  const totalSupply = parseFloat(
    formatUnits(data.totalSupply, poolTokenInfo.decimals),
  );

  const tokenAReserve = parseFloat(
    formatUnits(data.reserves.tokenA, tokenAInfo.decimals),
  );

  const tokenBReserve = parseFloat(
    formatUnits(data.reserves.tokenB, tokenBInfo.decimals),
  );

  try {
    const estimatedLPTokenBalance =
      lpTokeBalance +
      Math.min(
        (totalSupply *
          parseFloat(
            formatUnits(formValues.tokenAAmount, tokenAInfo.decimals),
          )) /
          tokenAReserve,
        (totalSupply *
          parseFloat(
            formatUnits(formValues.tokenBAmount, tokenBInfo.decimals),
          )) /
          tokenBReserve,
      );

    const parsedPoolTokenBalance = parseUnits(
      estimatedLPTokenBalance.toString(),
      poolTokenInfo.decimals,
    );

    const poolShare =
      (lpTokeBalance + estimatedLPTokenBalance) /
      (totalSupply + estimatedLPTokenBalance);

    if (data.totalSupply === BigInt(0)) {
      return {
        data: {
          poolShare: 1,
          estimatedLPTokenBalance: parsedPoolTokenBalance,
          poolToken,
          allowances: data.allowances,
          reserves: data.reserves,
        },
        refetch,
      };
    }

    return {
      data: {
        poolShare,
        estimatedLPTokenBalance: parsedPoolTokenBalance,
        poolToken,
        allowances: data.allowances,
        reserves: data.reserves,
      },
      refetch,
    };
  } catch (e) {
    return {
      data: {
        poolShare: 1,
        estimatedLPTokenBalance: BigInt(0),
        poolToken,
        allowances: data.allowances,
        reserves: data.reserves,
      },
      refetch,
    };
  }
};
