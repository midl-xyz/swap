'use client';

import { wagmiConfig } from '@/global';
import { createContext, ReactNode, useContext, useState } from 'react';
import { Address } from 'viem';

interface Token {
  chain: number;
  token: Address;
}

export const LastUsedTokensProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const localTokens =
    typeof window !== 'undefined' && localStorage.getItem('tokens');

  let initialTokens = [];

  try {
    initialTokens = localTokens
      ? JSON.parse(localTokens).filter(([chainId]: [number, any]) => {
          return wagmiConfig.chains.some((chain) => chain.id === chainId);
        })
      : [];
  } catch {}

  const [tokens, setTokens] = useState<Map<number, Address[]>>(
    new Map(initialTokens),
  );

  const [selectedToken, setSelectedToken] = useState<Token>();

  const addToken = (chain: number, token: Address) => {
    const chainTokens = tokens.get(chain) || [];
    const newChainTokens = new Set([token, ...chainTokens]);
    setTokens(tokens.set(chain, Array.from(newChainTokens).slice(0, 5)));

    localStorage.setItem(
      'tokens',
      JSON.stringify(Array.from(tokens.entries())),
    );
  };

  const selectToken = (token?: Token) => {
    setSelectedToken(token);
  };

  return (
    <LastUsedTokensContext.Provider
      value={{
        tokens,
        selectedToken,
        addToken,
        selectToken,
      }}
    >
      {children}
    </LastUsedTokensContext.Provider>
  );
};

const LastUsedTokensContext = createContext<
  | {
      tokens: Map<number, Address[]>;
      selectedToken: Token | undefined;
      addToken: (chain: number, token: Address) => void;
      selectToken: (token: Token) => void;
    }
  | undefined
>(undefined);

export const useLastUsedTokens = () => {
  const context = useContext(LastUsedTokensContext);

  if (!context) {
    throw new Error(
      'useLastUsedTokens must be used within a LastUsedTokensProvider',
    );
  }

  return context;
};
