import { formatPrice } from '@/shared/lib/formatPrice';
import {
  AreaStyleOptions,
  ChartOptions,
  DeepPartial,
  LineType,
  SeriesOptionsCommon,
  TimeChartOptions,
} from 'lightweight-charts';

export const chartOptions: DeepPartial<ChartOptions> = {
  layout: {
    textColor: '#BFBFBF',
    fontSize: 12,
    attributionLogo: false,
  },
  handleScroll: {
    mouseWheel: false,
    pressedMouseMove: false,
    horzTouchDrag: false,
    vertTouchDrag: false,
  },
  handleScale: {
    axisPressedMouseMove: false,
    mouseWheel: false,
    pinch: false,
  },
  leftPriceScale: {
    visible: false,
  },
  rightPriceScale: {
    visible: true,
  },
  grid: {
    vertLines: { color: 'transparent' },
    horzLines: { color: 'transparent' },
  },
  localization: {
    dateFormat: 'MM.dd.yyyy',
  },
};

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

export const areaOptions: DeepPartial<AreaStyleOptions & SeriesOptionsCommon> =
  {
    topColor: '#FFBE98',
    bottomColor: '#FEFEFE00',
    lineColor: '#FF927A',
    lineWidth: 2,
    lastValueVisible: false,
    priceLineVisible: true,
    lineType: LineType.Curved,
    pointMarkersVisible: false,
    priceFormat: {
      type: 'custom',
      minMove: 0.000000001,
      formatter: (price: number) => formatPrice(price),
    },
  };

export let currentTimeRange: { from: number; to: number } | null = null;

export const setCurrentTimeRange = (range: { from: number; to: number }) => {
  currentTimeRange = range;
};

export const timeChartOptions: DeepPartial<TimeChartOptions> = {
  crosshair: {
    vertLine: {
      visible: true,
      labelVisible: false,
    },
    horzLine: {
      visible: true,
      labelVisible: false,
    },
  },
  layout: {
    attributionLogo: false,
  },
  timeScale: {
    ignoreWhitespaceIndices: false,
    allowShiftVisibleRangeOnWhitespaceReplacement: false,
    maxBarSpacing: 0,
    rightOffset: 2,
    fixRightEdge: false,
    lockVisibleTimeRangeOnResize: false,
    fixLeftEdge: true,
    borderColor: 'transparent',
    timeVisible: true,
    minBarSpacing: 0,

    tickMarkFormatter: (time: number) => {
      if (!currentTimeRange) return '';

      const rangeSeconds = currentTimeRange.to - currentTimeRange.from;
      const isOneDayOrLess = rangeSeconds <= 24 * 60 * 60;

      const date = new Date(time * 1000);

      if (isOneDayOrLess) {
        return date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        });
      } else {
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        return `${day} ${month}`;
      }
    },
  },
  rightPriceScale: {
    autoScale: true,
    borderColor: 'transparent',
    mode: 0,
    scaleMargins: {
      top: 0.2,
      bottom: 0.2,
    },
  },
};
