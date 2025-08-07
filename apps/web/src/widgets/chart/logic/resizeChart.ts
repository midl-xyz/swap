import { MutableRefObject } from 'react';
import { IChartApi } from 'lightweight-charts';

export const resizeChart = (
  chart: IChartApi,
  chartContainerRef: MutableRefObject<HTMLDivElement | null>,
) => {
  chart.resize(
    chartContainerRef?.current?.clientWidth || 0,
    chartContainerRef?.current?.clientHeight || 0,
  );

  return 0;
};
