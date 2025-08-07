import { useEffect, useRef } from 'react';
import {
  AreaStyleOptions,
  DeepPartial,
  SeriesOptionsCommon,
  TimeChartOptions,
  createChart,
} from 'lightweight-charts';
import { Stack } from '~/styled-system/jsx';
import { drawChart } from '../logic/drawChart';
import { resizeChart } from '../logic/resizeChart';

export type ChartData = { time: number; value: number };

export type ChartProps = {
  data: ChartData[];
  height?: string;
  areaOptions: DeepPartial<AreaStyleOptions & SeriesOptionsCommon>;
  chartOptions?: DeepPartial<TimeChartOptions>;
  timeChartOptions?: DeepPartial<TimeChartOptions>;
  width?: string;
};

export const Chart = ({
  data,
  chartOptions,
  areaOptions,
  timeChartOptions,
  height = '320px',
  width = '100%',
}: ChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!data?.length || !chartContainerRef?.current) return;

    const chart = createChart(chartContainerRef.current, chartOptions);

    const cleanup = drawChart({
      chart,
      data,
      timeChartOptions,
      areaOptions,
      chartContainerRef,
    });

    const resizeRedraw = () => resizeChart(chart, chartContainerRef);
    window.addEventListener('resize', resizeRedraw);

    // eslint-disable-next-line consistent-return
    return () => {
      cleanup();
      chart.remove();
      window.removeEventListener('resize', resizeRedraw);
    };
  }, [data]);

  return (
    <Stack
      id="chartContainer"
      width={width}
      height={height}
      ref={chartContainerRef}
    />
  );
};
