import { Token } from '@/entities';
import { useTokenBalance } from '@/features';
import { tokenList, WETHByChain } from '@/global';
import { getTokenSymbol } from '@/widgets/swap-form/ui/utils';
import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { useMemo } from 'react';
import { Address } from 'viem';

export const useToken = (address: Address, chainId: number): Token => {
  const { data } = useTokenBalance(address, { chainId });

  return useMemo(() => {
    const token = tokenList.find(
      (token) => token.address === address && token.chainId === chainId,
    );

    if (!token) {
      return {
        symbol: getTokenSymbol(address) || (data.symbol ?? 'N/A'),
        name: data.name ?? 'N/A',
        address,
        chainId,
        decimals: data.decimals ?? 18,
        logoURI:
          address === WETHByChain[midlRegtest.id]
            ? 'https://assets-cdn.trustwallet.com/blockchains/bitcoin/info/logo.png'
            : '',
        isPopular: false,
      };
    }

    return token;
  }, [data, address, chainId]);
};
