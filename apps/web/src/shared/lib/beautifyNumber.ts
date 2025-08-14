/* eslint-disable prettier/prettier */

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

export const beautifyNumber = (
  value: string | number | bigint | undefined | null,
  overrideToFixed?: number,
) => {
  let typedValue = 0;

  if (value === undefined || value === null) {
    return '0';
  }

  if (typeof value === 'string') {
    typedValue = Number.parseFloat(value);
  } else if (typeof value === 'number') {
    typedValue = value;
  } else if (typeof value === 'bigint') {
    typedValue = Number.parseFloat(value.toString());
  }

  if (!Number.isFinite(typedValue) || typedValue === 0) {
    return '0';
  }

  const threshold = 1e-3;
  if (typedValue < threshold) {
    const { countZeros, significantDigits } = format(
      Number(typedValue).toFixed(20),
    );

    if (!significantDigits) {
      return '0';
    }

    return `0.0${superscriptMap[countZeros] || countZeros}${significantDigits}`.replace(
      /000$/,
      '',
    );
  }

  // Special handling for small numbers that would round to 0.00 with overrideToFixed
  if (
    overrideToFixed !== undefined &&
    typedValue > 0 &&
    typedValue.toFixed(overrideToFixed) === '0.00'
  ) {
    return typedValue.toFixed(3);
  }

  if (overrideToFixed !== undefined) {
    return typedValue.toFixed(overrideToFixed);
  }

  if (typedValue < 0.01) {
    return typedValue.toFixed(4);
  }

  if (typedValue > 10_000_000) {
    return typedValue.toFixed(1);
  }

  if (typedValue > 10_000) {
    return typedValue.toFixed(2);
  }

  return typedValue.toFixed(6);
};
