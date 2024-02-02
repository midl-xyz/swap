import { Address, zeroAddress } from "viem";
import { Chain, goerli } from "viem/chains";

type TokenDescription = {
  name: string;
  symbol: string;
  decimals: number;
  trustWalletAddress: string;
};

type TokenAddress = Record<string, TokenDescription>;

type Tokens = {
  [key in Chain["id"]]: TokenAddress;
};

// To find trustwallet alias - find a suitable token on Base in TrustWallet assets repo:
// https://github.com/trustwallet/assets/tree/master/blockchains/base/assets

export const tokenConfig: Partial<Tokens> = {
  [goerli.id]: {
    ["0xD7889E9c1D27475C10C54C7a62e1DdE84f510f4d"]: {
      name: "Wrapped ETH", // "Name" on blockexplorer
      symbol: "WETH", // "Symbol"
      decimals: 18,
      trustWalletAddress: zeroAddress,
    },
    ["0xc4145c3eFdEdEEdFb2cf18C0aE2EFc202831Eedf"]: {
      name: "USDC",
      symbol: "USDC",
      decimals: 18,
      trustWalletAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    },
    ["0x0B374D5684FE442aa2AFC4E8c202e44274826319"]: {
      name: "USDT",
      symbol: "USDT",
      decimals: 18,
      trustWalletAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    },
  },
};

type WETHConfig = {
  [key in Chain["id"]]: Address;
};

export const WETHByChain: Partial<WETHConfig> = {
  [goerli.id]: "0xDDfBAaDB7BA1161Daf87Fb140d1B8A811ff76Edd",
};
