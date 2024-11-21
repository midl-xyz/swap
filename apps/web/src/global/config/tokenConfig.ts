import { wagmiConfig } from '@/global';
import { promMainnet } from '@/global/customChainsConfig';
import { Address } from 'viem';
import { GetChainIdReturnType } from 'wagmi/actions';

type ChainId = GetChainIdReturnType<typeof wagmiConfig>;

export const WETHByChain: Record<ChainId, Address> = {
  [promMainnet.id]: '0x04A21a38D5E275d6023B27504beB3095dC43B0C0',
};
