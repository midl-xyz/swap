import { Token } from '@/entities';
import { zeroAddress } from 'viem';
import { sepolia } from 'viem/chains';

export const tokenList: Token[] = [
  {
    symbol: 'ETH',
    name: 'Sepolia ETH',
    address: zeroAddress,
    chainId: sepolia.id,
    decimals: 18,
    logoURI:
      'https://github.com/trustwallet/assets/blob/master/blockchains/ethereum/info/logo.png',
  },
  {
    symbol: 'WstETH',
    name: 'Wrapped stETH',
    address: '0xD7be32A18f2d5F281708228FE01b34d8039Ef35E',
    chainId: sepolia.id,
    decimals: 18,
    logoURI: '',
  },
  {
    symbol: 'BFEE',
    name: 'Base Fee LMA Token',
    address: '0x57121897Fa55b3649A3A8789cC68D6F5e3825AD9',
    chainId: sepolia.id,
    decimals: 18,
    logoURI: '',
  },
];
