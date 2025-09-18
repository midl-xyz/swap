import { Address } from 'viem';

export type TokenTag = 'BAG_WARS' | 'COMMUNITY';

export type Token = {
  symbol: string;
  name: string;
  address: Address;
  chainId: number;
  decimals: number;
  logoURI: string;
  isPopular?: boolean;
  tags?: TokenTag[];
};
