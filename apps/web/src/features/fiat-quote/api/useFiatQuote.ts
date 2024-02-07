import { useEffect, useState } from 'react';

export function useFiatQuote(tokenSymbol: string): number | null {
  const [fiatQuote, setFiatQuote] = useState<number | null>(null);

  useEffect(() => {
    if (!tokenSymbol) return;
    const fetchFiatQuote = async () => {
      try {
        const response = await fetch(
          `/api/coinmarketcap?symbol=${tokenSymbol}`,
        );

        if (response.ok) {
          const data = await response.json();

          if (data.price) {
            setFiatQuote(data.price);
          }
        } else {
          console.error('Failed to fetch fiat price for token: ', tokenSymbol);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchFiatQuote();
  }, [tokenSymbol]);

  return fiatQuote;
}
