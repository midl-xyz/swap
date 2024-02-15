import { Address } from 'viem';

export const shortenAddress = (address: Address, chars = 4) => {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
};
