'use client';

import { createContext, useContext, useState } from 'react';

type FiatQuotes = {
  [tokenSymbol: string]: {
    price: number;
    lastUpdated: number;
  };
};

export const FiatQuotesContext = createContext<{
  fiatQuotes: FiatQuotes;
  setFiatQuotes: (fiatQuotes: FiatQuotes) => void;
}>({
  fiatQuotes: {},
  setFiatQuotes: (fiatQuotes: FiatQuotes) => {},
});

export const FiatQuotesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fiatQuotes, setFiatQuotes] = useState<FiatQuotes>({});

  return (
    <FiatQuotesContext.Provider value={{ fiatQuotes, setFiatQuotes }}>
      {children}
    </FiatQuotesContext.Provider>
  );
};

export const useFiatQuotes = () => {
  const { fiatQuotes, setFiatQuotes } = useContext(FiatQuotesContext);

  return { fiatQuotes, setFiatQuotes };
};
