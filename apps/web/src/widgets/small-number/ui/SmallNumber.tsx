export const formatNumber = (num: number = 0): string => {
  if (num <= 999999999) {
    return parseFloat(String(num)).toLocaleString();
  }
  // Thousands, Millions, trillions, quadrillions
  const suffixes = ['', 'K', 'M', 'B', 'T', 'Q'];
  // eslint-disable-next-line no-bitwise
  const tier = (Math.log10(Math.abs(num)) / 3) | 0;
  const suffix = suffixes?.[tier] || '';
  const scale = 10 ** (tier * 3);
  const scaled = num / scale;

  return `${scaled.toFixed(0)}${suffix} `;
};

export const format = (
  numberStr: string,
): { countZeros: number; significantDigits: string } => {
  const decimalPart = numberStr.split('.')[1];

  let countZeros = 0;
  let significantDigits = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < decimalPart.length; i++) {
    if (decimalPart[i] === '0') {
      // eslint-disable-next-line no-plusplus
      countZeros++;
    } else {
      significantDigits = decimalPart.slice(i, i + 4); // Get 4 digits after the zeros
      break;
    }
  }

  return { countZeros, significantDigits };
};

interface Props {
  value: number;
}

export const SmallNumber = ({ value, ...rest }: Props) => {
  const threshold = 1e-3;
  if (value < threshold) {
    const { countZeros, significantDigits } = format(Number(value).toFixed(20));

    if (!significantDigits) {
      return <span {...rest}>0</span>;
    }

    return (
      <span {...rest}>
        0.0<sub>{countZeros}</sub>
        {significantDigits}
      </span>
    );
  }

  return <span {...rest}>{formatNumber(value)}</span>;
};
