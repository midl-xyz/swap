import { Token } from '@/entities';

export const tokenList: Token[] = [
  {
    symbol: 'USDT',
    name: 'Tether USD',
    address: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    chainId: 5,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707',
    isPopular: true,
  },
  {
    symbol: 'DAI',
    name: 'Dai',
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    chainId: 5,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/9956/small/dai-multi-collateral-mcd.png?1574218774',
    isPopular: true,
  },
];
