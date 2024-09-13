import { WETHByChain } from '@/global';
import { promTestnet } from '@/global/customChainsConfig';
import { Address, zeroAddress } from 'viem';

export const calculatePriceImpact = ({
  amountIn,
  reserveIn,
  reserveOut,
}: {
  amountIn: number;
  reserveIn: number;
  reserveOut: number;
}) => {
  const numerator = amountIn * reserveOut;
  const denominator = reserveIn + amountIn;
  const amountOut = numerator / denominator;

  const initialPrice = reserveOut / reserveIn;

  const newReserveIn = reserveIn + amountIn;
  const newReserveOut = reserveOut - amountOut;

  const newPrice = newReserveOut / newReserveIn;

  const priceImpact = ((newPrice - initialPrice) / initialPrice) * 100;
  return priceImpact.toFixed(2) + '%';
};

export const getCorrectToken = ({
  token,
  chainId,
}: {
  token?: Address;
  chainId: keyof typeof WETHByChain;
}) => (token === zeroAddress ? WETHByChain[chainId] : token);

export const getTokenSymbol = (address: Address) => {
  const symbols = {
    [zeroAddress as Address]: 'PROM',
    [WETHByChain[promTestnet.id]]: 'PROM',
  };

  return symbols[address];
};
