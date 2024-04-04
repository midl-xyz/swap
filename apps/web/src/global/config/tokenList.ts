import { Token } from '@/entities';
import { promTestnet } from '@/global/config/wagmi';

export const tokenList: Token[] = [
  {
    symbol: 'USDT',
    name: 'Tether USD',
    address: '0xAe8D8D9444aD4227525295f2870b71b2a17ABF76',
    chainId: promTestnet.id,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707',
    isPopular: true,
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0xD54515208E0D75758469f5b873779D8DA6251Ef2',
    chainId: promTestnet.id,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389',
    isPopular: true,
  },
  {
    symbol: 'USDCm',
    name: 'USD Coin Metamask',
    address: '0x3d6b686d2366BfB1f6E998602af89D254D8cF7fC',
    chainId: promTestnet.id,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389',
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    address: '0x17E0C44cc3b94E157FdcA3FdDF2F2232A18cA8dd',
    chainId: promTestnet.id,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/9956/small/dai-multi-collateral-mcd.png?1574218774',
  },
];
