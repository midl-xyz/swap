import { Token } from '@/entities';
import { promTestnet } from '@/global/config/wagmi';
import { zeroAddress } from 'viem';
import { sepolia } from 'viem/chains';

export const tokenList: Token[] = [
  {
    symbol: 'PROM',
    name: 'PROM Token',
    address: zeroAddress,
    chainId: sepolia.id,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/8825/standard/Ticker.png?1696508978',
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    address: '0xF1f4a505b20077d04A56D4849A6697ECA641cD52',
    chainId: sepolia.id,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707',
    isPopular: true,
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0xDC6822a1d35f386Fea1F4d195D19a15446119FE3',
    chainId: sepolia.id,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389',
    isPopular: true,
  },
];
