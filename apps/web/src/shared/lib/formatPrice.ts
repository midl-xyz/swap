import { format } from '@/widgets/small-number/ui/SmallNumber';

const superscriptMap: { [key: string]: string } = {
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
};

export const formatPrice = (price: number): string => {
  const threshold = 1e-3;
  if (price < threshold) {
    const { countZeros, significantDigits } = format(Number(price).toFixed(20));

    if (!significantDigits) {
      return '0';
    }

    return `0.0${superscriptMap[countZeros] || countZeros}${significantDigits}`.replace(
      /000$/,
      '',
    );
  }

  if (price < 0.01) {
    return `${price.toFixed(4)}`;
  }

  return `${price.toFixed(2)}`;
};

/**
 * Format USD price with $ symbol
 */
export const formatUsdPrice = (price: number): string => {
  return `$${formatPrice(price)}`;
};
