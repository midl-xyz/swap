'use client';

import { createContext, useContext, useState } from 'react';

export const LastUsedTokensProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const localTokens =
    typeof window !== 'undefined' && localStorage.getItem('tokens');
  const initialTokens = localTokens ? JSON.parse(localTokens) : [];

  const [tokens, setTokens] = useState<Map<number, string[]>>(
    new Map(initialTokens),
  );

  const addToken = (chain: number, token: string) => {
    const chainTokens = tokens.get(chain) || [];
    const newChainTokens = new Set([token, ...chainTokens]);
    setTokens(tokens.set(chain, Array.from(newChainTokens).slice(0, 5)));

    localStorage.setItem(
      'tokens',
      JSON.stringify(Array.from(tokens.entries())),
    );
  };

  return (
    <LastUsedTokensContext.Provider
      value={{
        tokens,
        addToken,
      }}
    >
      {children}
    </LastUsedTokensContext.Provider>
  );
};

const LastUsedTokensContext = createContext<
  | {
      tokens: Map<number, string[]>;
      addToken: (chain: number, token: string) => void;
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
