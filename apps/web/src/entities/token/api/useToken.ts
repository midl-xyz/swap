import { Token } from '@/entities';
import { useTokenBalance } from '@/features';
import { tokenList } from '@/global';
import { Address } from 'viem';

export const useToken = (address: Address, chainId: number): Token => {
  const token = tokenList.find(
    (token) => token.address === address && token.chainId === chainId,
  );

  const { data } = useTokenBalance(address, { chainId });

  if (!token) {
    return {
      symbol: data.symbol ?? 'N/A',
      name: data.name ?? 'N/A',
      address,
      chainId,
      decimals: data.decimals ?? 18,
      logoURI: '',
      isPopular: false,
    };
  }

  return token;
};
