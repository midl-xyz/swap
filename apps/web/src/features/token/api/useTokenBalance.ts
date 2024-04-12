import { tokenList } from '@/global';
import { useMemo } from 'react';
import { Address, erc20Abi, formatUnits, zeroAddress } from 'viem';
import { useAccount, useBalance, useReadContracts } from 'wagmi';
import { readContractsQueryKey } from 'wagmi/query';

export const useTokenBalance = (
  contract: Address,
  {
    address,
  }: {
    chainId?: number;
    address?: Address;
  } = {},
) => {
  const { address: userAddress } = useAccount();

  const contracts: any[] = [
    {
      address: contract,
      abi: erc20Abi,
      functionName: 'decimals',
    },
    {
      address: contract,
      abi: erc20Abi,
      functionName: 'name',
    },
    {
      address: contract,
      abi: erc20Abi,
      functionName: 'symbol',
    },
    {
      address: contract,
      abi: erc20Abi,
      functionName: 'totalSupply',
    },
  ];

  if (address || userAddress) {
    contracts.push({
      address: contract,
      abi: erc20Abi,
      functionName: 'balanceOf',
      args: [address ?? userAddress],
    });
  }

  const { data, ...rest } = useReadContracts({
    allowFailure: true,
    scopeKey: 'balance',
    contracts,
    query: {
      enabled: Boolean(contract),
    },
  });

  const { data: balance, ...restBalance } = useBalance({
    address: address ?? userAddress,
    query: {
      enabled: Boolean(contract),
    },
  });

  const parsedData: {
    decimals?: number;
    name?: string;
    symbol?: string;
    totalSupply?: bigint;
    balance?: bigint;
    formattedBalance?: string;
  } = useMemo(
    () => ({
      decimals: data?.[0]?.result as number,
      name: data?.[1]?.result as string,
      symbol: data?.[2]?.result as string,
      totalSupply: data?.[3]?.result as bigint,
      balance: data?.[4]?.result as bigint,
      formattedBalance: formatUnits(
        (data?.[4]?.result as bigint) ?? BigInt(0),
        (data?.[0]?.result as number) ?? 18,
      ),
    }),
    [data],
  );

  if (contract === zeroAddress) {
    return {
      data: {
        decimals: balance?.decimals,
        name: tokenList.find((it) => it.address === zeroAddress)?.name,
        symbol: tokenList.find((it) => it.address === zeroAddress)?.symbol,
        totalSupply: 0,
        balance: balance?.value,
        formattedBalance: formatUnits(
          balance?.value ?? BigInt(0),
          balance?.decimals ?? 18,
        ),
      },
      ...restBalance,
    };
  }

  return {
    ...rest,
    data: parsedData,
  };
};
