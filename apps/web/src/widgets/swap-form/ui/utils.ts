export const calculatePriceImpact = ({
  amountIn,
  reserveIn,
  reserveOut,
}: {
  amountIn: number;
  reserveIn: number;
  reserveOut: number;
}) => {
  const numerator = amountIn * reserveOut;
  const denominator = reserveIn + amountIn;
  const amountOut = numerator / denominator;

  // Начальная цена перед сделкой
  const initialPrice = reserveOut / reserveIn;

  // Новые резервы после сделки
  const newReserveIn = reserveIn + amountIn;
  const newReserveOut = reserveOut - amountOut;

  // Новая цена после сделки
  const newPrice = newReserveOut / newReserveIn;

  // Процентное изменение цены
  const priceImpact = ((newPrice - initialPrice) / initialPrice) * 100;
  return priceImpact.toFixed(2) + '%';
};
