export const fetchFiatQuote = async (tokenSymbol: string) => {
  const response = await fetch(`/api/coinmarketcap?symbol=${tokenSymbol}`);

  const data = await response.json();

  return data.price;
};
