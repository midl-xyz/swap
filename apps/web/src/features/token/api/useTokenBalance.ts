import { Address, erc20Abi } from 'viem';
import { useAccount, useReadContracts } from 'wagmi';

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
    contracts,
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
  } = {
    decimals: data?.[0]?.result as number,
    name: data?.[1]?.result as string,
    symbol: data?.[2]?.result as string,
    totalSupply: data?.[3]?.result as bigint,
    balance: data?.[4]?.result as bigint,
  };

  return {
    ...rest,
    data: parsedData,
  };
};
