'use client';

import { fetchFiatQuote, useFiatQuotes } from '@/features/fiat-quote';
import { useCallback, useEffect } from 'react';

const FIAT_QUOTE_EXPIRY = 1000 * 60;

export function useFiatQuote(tokenSymbol: string): number | null {
  const { fiatQuotes, setFiatQuotes } = useFiatQuotes();

  const fiatQuote = fiatQuotes[tokenSymbol] ?? null;

  const updateFiatQuote = useCallback(
    async (tokenSymbol: string) => {
      try {
        const price = await fetchFiatQuote(tokenSymbol);
        setFiatQuotes({ ...fiatQuotes, [tokenSymbol]: price });
      } catch (error) {
        console.error('Failed to fetch fiat quote', error);
      }
    },
    [fiatQuotes, setFiatQuotes],
  );

  useEffect(() => {
    if (!tokenSymbol) return;

    if (fiatQuotes[tokenSymbol].lastUpdated > Date.now() - FIAT_QUOTE_EXPIRY) {
      return;
    }

    updateFiatQuote(tokenSymbol);
  }, [tokenSymbol, fiatQuotes, updateFiatQuote]);

  return fiatQuote.price;
}
