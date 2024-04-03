import { Token } from '@/entities';
import { tokenList } from '@/global';

export const useToken = (address: string, chainId: number): Token => {
  const token = tokenList.find(
    (token) => token.address === address && token.chainId === chainId,
  );

  if (!token) {
    return {
      symbol: 'N/A',
      name: 'N/A',
      address,
      chainId,
      decimals: 18,
      logoURI: '',
      isPopular: false,
    };
  }

  return token;
};
