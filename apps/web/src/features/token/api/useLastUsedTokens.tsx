import { createContext, useContext, useState } from 'react';
import { Chain } from 'viem';

export const LastUsedTokensProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tokens, setTokens] = useState<Map<number, string[]>>(new Map());

  const addToken = (chain: Chain, token: string) => {
    const chainTokens = tokens.get(chain.id) || [];
    const newChainTokens = new Set([token, ...chainTokens]);
    setTokens(tokens.set(chain.id, Array.from(newChainTokens).slice(0, 5)));
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
      addToken: (chain: Chain, token: string) => void;
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
