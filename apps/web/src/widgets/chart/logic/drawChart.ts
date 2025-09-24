import { setCurrentTimeRange } from '@/widgets/chart/ui/chartConfgs';
import { AreaData, AreaSeries, IChartApi } from 'lightweight-charts';
import { RefObject } from 'react';
import { ChartProps } from '../ui/Chart';

type DrawChartParams = Pick<
  ChartProps,
  'data' | 'areaOptions' | 'timeChartOptions'
> & {
  chart: IChartApi;
  chartContainerRef: RefObject<HTMLDivElement>;
};
export const drawChart = ({
  chart,
  data,
  areaOptions,
  timeChartOptions,
  chartContainerRef,
}: DrawChartParams) => {
  const areaSeries = chart.addSeries(AreaSeries, areaOptions);

  if (timeChartOptions) {
    chart.applyOptions(timeChartOptions);
  }

  areaSeries.setData(data.sort((a, b) => a.time - b.time) as AreaData[]);
  chart.timeScale().scrollToRealTime();
  chart.timeScale().fitContent();

  // Create tooltip
  const tooltip = document.createElement('div');
  tooltip.style.position = 'absolute';
  tooltip.style.background = '#FF927A';
  tooltip.style.color = 'white';
  tooltip.style.padding = '6px 10px';
  tooltip.style.borderRadius = '6px';
  tooltip.style.fontSize = '12px';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.zIndex = '10';
  tooltip.style.transition = 'opacity 0.2s ease';
  tooltip.style.opacity = '0';
  tooltip.setAttribute('data-tooltip', 'chart-tooltip'); // mark it for cleanup

  document.body.appendChild(tooltip);

  const onCrosshairMove = (param: any) => {
    if (!param.point || !param.time || !param.seriesData) {
      tooltip.style.opacity = '0';
      return;
    }

    const price = param.seriesData.get(areaSeries);

    if (price === undefined) return;

    const dateObj = new Date((price.time as number) * 1000);
    const date = dateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
    });
    const timeStr = dateObj.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });

    tooltip.innerHTML = `
  <div><strong>Price:</strong> ${price?.value}</div>
  <div>${date}, ${timeStr}</div>
`;
    const chartElement = chartContainerRef?.current?.getBoundingClientRect();
    if (!chartElement) return;

    tooltip.style.left = `${chartElement.left + param.point.x}px`;
    tooltip.style.top = `${chartElement.top + param.point.y - 40}px`;
    tooltip.style.opacity = '1';
  };

  chart.subscribeCrosshairMove(onCrosshairMove);

  chart.timeScale().subscribeVisibleTimeRangeChange((range) => {
    if (range) {
      setCurrentTimeRange({
        from: Math.floor(+range.from),
        to: Math.floor(+range.to),
      });
    }
  });

  requestAnimationFrame(() => {
    const visibleRange = chart.timeScale().getVisibleLogicalRange();
    if (visibleRange !== null) {
      chart.timeScale().setVisibleLogicalRange({
        from: visibleRange.from - 14,
        to: visibleRange.to,
      });
    }
  });

  return () => {
    chart.unsubscribeCrosshairMove(onCrosshairMove);

    const existingTooltip = document.querySelector(
      '[data-tooltip="chart-tooltip"]',
    );
    if (existingTooltip) {
      existingTooltip.remove();
    }
  };
};
