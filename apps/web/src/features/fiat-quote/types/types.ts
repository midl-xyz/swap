type CoinMarketCapQuoteItem = {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: string;
  max_supply: number | null;
  circulating_supply: number;
  total_supply: number;
  is_active: number;
  platform: {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    token_address: string;
  } | null;
  cmc_rank: number;
  last_updated: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      market_cap: number;
      last_updated: string;
    };
  };
};

export type CoinMarketCapQuote = {
  status: {
    timestamp: string;
    error_code: number;
    error_message: string | null;
    elapsed: number;
    credit_count: number;
    notice: string | null;
    total_count: number;
  };
  data: {
    [symbol: string]:
      | CoinMarketCapQuoteItem[]
      | CoinMarketCapQuoteItem
      | undefined;
  };
};
