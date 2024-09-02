import { wagmiConfig } from '@/global';
import { Address } from 'viem';
import { sepolia } from 'viem/chains';
import { GetChainIdReturnType } from 'wagmi/actions';

type ChainId = GetChainIdReturnType<typeof wagmiConfig>;

//TODO: add promtestnet WETHByChain
export const WETHByChain: Record<ChainId, Address> = {
  [sepolia.id]: '0x1B2B2d20D0a7B34c12327EEc02bE7D476552f6Bf',
};
