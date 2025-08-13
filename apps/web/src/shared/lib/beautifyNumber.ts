/* eslint-disable prettier/prettier */

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

  // Show <0.01 for values less than 0.01
  if (typedValue > 0 && typedValue < 0.01) {
    return '<0.01';
  }

  if (overrideToFixed !== undefined) {
    return typedValue.toFixed(overrideToFixed);
  }

  if (typedValue > 10_000_000) {
    return typedValue.toFixed(1);
  }

  if (typedValue > 10_000) {
    return typedValue.toFixed(2);
  }

  return typedValue.toFixed(6);
};
