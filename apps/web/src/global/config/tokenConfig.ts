import { wagmiConfig } from '@/global';
import { Address } from 'viem';
import { goerli } from 'viem/chains';
import { GetChainIdReturnType } from 'wagmi/actions';

type ChainId = GetChainIdReturnType<typeof wagmiConfig>;

export const WETHByChain: Record<ChainId, Address> = {
  [goerli.id]: '0xDDfBAaDB7BA1161Daf87Fb140d1B8A811ff76Edd',
};
