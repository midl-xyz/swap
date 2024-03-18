import { CoinMarketCapQuote } from '@/features/fiat-quote/types';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol');

  if (!symbol || typeof symbol !== 'string') {
    return NextResponse.json(
      { error: 'Invalid token symbol' },
      { status: 400 },
    );
  }

  const apiUrl = `https://sandbox-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbol}&convert=USD`;
  const apiKey = '164b37a9-29fd-4c4c-9f9a-15b26a8370b7'; // TODO: replace CoinMarketCap with PROD key later

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        Accept: 'application/json',
      },
    });

    const data: CoinMarketCapQuote = await response.json();
    let quoteData = data.data[symbol];
    let tokenPrice = null;

    tokenPrice = Array.isArray(quoteData)
      ? quoteData[0]?.quote.USD.price
      : quoteData?.quote.USD.price;

    return NextResponse.json(
      {
        symbol: symbol,
        price: tokenPrice,
        timestamp: data.status.timestamp,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

export const revalidate = 60;
