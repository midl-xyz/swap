import { wagmiConfig } from '@/global';
import { promTestnet } from '@/global/customChainsConfig';
import { Address } from 'viem';
import { sepolia } from 'viem/chains';
import { GetChainIdReturnType } from 'wagmi/actions';

type ChainId = GetChainIdReturnType<typeof wagmiConfig>;

export const WETHByChain: Record<ChainId, Address> = {
  [sepolia.id]: '0x1B2B2d20D0a7B34c12327EEc02bE7D476552f6Bf',
  [promTestnet.id]: '0x426A4d924C60fC0f6546b8ee2Ac0aECB9fbcaEF5',
};
