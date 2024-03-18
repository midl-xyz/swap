import { useEffect, useState } from 'react';

const fetchFiatQuote = async (
  tokenSymbol: string,
  setFiatQuote: (value: number) => void,
) => {
  try {
    const response = await fetch(`/api/coinmarketcap?symbol=${tokenSymbol}`);

    const data = await response.json();

    setFiatQuote(data.price);
  } catch (error) {
    console.error('Failed to fetch price with error: ', error);
  }
};

export function useFiatQuote(tokenSymbol: string): number | null {
  const [fiatQuote, setFiatQuote] = useState<number | null>(null);

  useEffect(() => {
    if (!tokenSymbol) return;

    fetchFiatQuote(tokenSymbol, setFiatQuote);
  }, [tokenSymbol]);

  return fiatQuote;
}
