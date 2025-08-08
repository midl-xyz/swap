import { TokenLogo } from '@/features';
import { useGetHistoricalPairMetrics } from '@/features/liquidity';
import {
  HistoricalPairMetricsOrderByInput,
  HistoricalPairMetricsQuery,
} from '@/features/liquidity/api/gql/graphql';
import { WETHByChain } from '@/global';
import { Button } from '@/shared';
import { AiOutlineSwapVertical } from '@/shared/assets';
import { AppPreloader } from '@/widgets/app-preloader';
import { Chart } from '@/widgets/chart';
import {
  areaOptions,
  chartOptions,
  timeChartOptions,
} from '@/widgets/chart/ui/chartConfgs';
import Arrow from '@/widgets/swap-form/assets/Arrow.svg';
import { midlRegtest } from '@midl-xyz/midl-js-executor';
import {
  fromUnixTime,
  startOfDay,
  subDays,
  getUnixTime,
  addDays,
  isWithinInterval,
  addMinutes,
  subHours,
  startOfHour,
} from 'date-fns';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Address, zeroAddress } from 'viem';
import { useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { HStack, Stack, VStack } from '~/styled-system/jsx';
import { hstack } from '~/styled-system/patterns';

interface Props {
  inputTokenInfo: {
    address: string;
    symbol: string;
  };
  outputTokenInfo: {
    address: string;
    symbol: string;
  };
}

const chartTabs = [
  'live',
  '4h',
  // '1d', '1w', 'max'
];
const chartLabels: Record<string, string> = {
  live: 'Live',
  '4h': '4H',
  // '1d': '1D',
  // '1w': '1W',
  // max: 'Max',
};

export const SwapFormChart = ({ inputTokenInfo, outputTokenInfo }: Props) => {
  const chainId = useChainId();
  const [expand, setExpand] = useState(false);
  const [chartTime, setChartTime] = useState<
    //'max' | '1w' | '1d'
    '4h' | 'live'
  >('4h');

  const WBTC = WETHByChain[midlRegtest.id];

  const {
    data: chartData,
    isLoading: isInitialLoading,
    isError: isInitialError,
  } = useGetHistoricalPairMetrics({
    enabled: !!inputTokenInfo?.address && !!outputTokenInfo?.address,
    where: {
      token0_eq:
        inputTokenInfo.address === zeroAddress ? WBTC : inputTokenInfo.address,
      token1_eq:
        outputTokenInfo.address === zeroAddress
          ? WBTC
          : outputTokenInfo.address,
    },
    orderBy: HistoricalPairMetricsOrderByInput.DateAsc,
    queryKey: [
      `MemeTokenHistory-${
        inputTokenInfo.address === zeroAddress ? WBTC : inputTokenInfo.address
      }-${
        outputTokenInfo.address === zeroAddress ? WBTC : outputTokenInfo.address
      }`,
      chainId,
    ],
  });
  const {
    data: chartDataInverse,
    isLoading,
    isError: isSecondaryError,
  } = useGetHistoricalPairMetrics({
    enabled: !!inputTokenInfo?.address && !!outputTokenInfo?.address,
    where: {
      token1_eq:
        inputTokenInfo.address === zeroAddress ? WBTC : inputTokenInfo.address,
      token0_eq:
        outputTokenInfo.address === zeroAddress
          ? WBTC
          : outputTokenInfo.address,
    },
    orderBy: HistoricalPairMetricsOrderByInput.DateDesc,
    queryKey: [
      `MemeTokenHistory-${
        outputTokenInfo.address === zeroAddress ? WBTC : outputTokenInfo.address
      }-${
        inputTokenInfo.address === zeroAddress ? WBTC : inputTokenInfo.address
      }`,
      chainId,
    ],
  });

  useEffect(() => {
    if (chartData || chartDataInverse) {
      setExpand(true);
    }
  }, [chartData, chartDataInverse]);

  const rawChartList = (
    chartData?.historicalPairMetrics?.length
      ? (chartData?.historicalPairMetrics as HistoricalPairMetricsQuery['historicalPairMetrics'])
      : (chartDataInverse?.historicalPairMetrics as HistoricalPairMetricsQuery['historicalPairMetrics']) ||
        []
  )
    .map(({ token1Price, token0Price, date: timestamp }) => {
      const priceUSD = chartData?.historicalPairMetrics.length
        ? token1Price
        : token0Price;
      return {
        value: parseFloat(priceUSD || 0),
        time: Math.floor(+timestamp / 1000),
      };
    })
    .sort((a, b) => a.time - b.time);
  // Ensure the data is sorted by time in ascending order.
  if (rawChartList.length > 0) {
    rawChartList.push({
      value: rawChartList[rawChartList.length - 1].value, // Use the last value
      time: Math.floor(Date.now() / 1000), // Use current time
    });
  }

  const generateFakePoints = (
    lastPoint: (typeof rawChartList)[number],
    start: Date,
    stepMinutes: number,
    totalPoints: number,
  ) => {
    const points: typeof rawChartList = [];

    for (let i = 0; i < totalPoints; i++) {
      const time = getUnixTime(addMinutes(start, i * stepMinutes));
      points.push({ ...lastPoint, time });
    }

    return points;
  };

  const filterChartData = (chartList: typeof rawChartList, range: string) => {
    const now = Math.floor(Date.now() / 1000);
    let filteredList: typeof rawChartList = [];

    const lastPoint = chartList[chartList.length - 1];
    if (!lastPoint) return [];

    const groupByDayAndTakeLast = (
      list: typeof rawChartList,
      startDate: Date,
      days: number,
    ) => {
      const result: typeof rawChartList = [];

      for (let i = 0; i < days; i++) {
        const dayStart = startOfDay(addDays(startDate, i));
        const dayEnd = addDays(dayStart, 1);

        const dayData = list.filter((item) =>
          isWithinInterval(fromUnixTime(item.time), {
            start: dayStart,
            end: dayEnd,
          }),
        );

        if (dayData.length > 0) {
          result.push(dayData[dayData.length - 1]);
        }
      }

      return result;
    };

    switch (range) {
      case 'live': {
        filteredList = chartList.filter((item) => item.time >= now - 5 * 60);

        if (filteredList.length < 3) {
          const lastPoint = chartList[chartList.length - 1];
          if (lastPoint) {
            const nowSec = Math.floor(Date.now() / 1000);
            const twoMinutesAgo = nowSec - 2.5 * 60;
            const fiveMinutesAgo = nowSec - 5 * 60;

            filteredList = [
              { ...lastPoint, time: fiveMinutesAgo },
              { ...lastPoint, time: twoMinutesAgo },
              { ...lastPoint, time: nowSec },
            ];
          }
        }
        break;
      }

      case '4h': {
        const start = subHours(new Date(), 4);
        filteredList = chartList.filter(
          (item) => fromUnixTime(item.time) >= start,
        );

        if (filteredList.length < 2) {
          const alignedStart = startOfHour(start);
          filteredList = generateFakePoints(lastPoint, alignedStart, 30, 8);
        }
        break;
      }

      case '1d': {
        const start = subHours(new Date(), 24);
        filteredList = chartList.filter(
          (item) => fromUnixTime(item.time) >= start,
        );

        if (filteredList.length < 2) {
          const alignedStart = startOfHour(start);
          filteredList = generateFakePoints(lastPoint, alignedStart, 60, 24);
        }
        break;
      }

      // case '1w': {
      //   const start = subDays(startOfDay(new Date()), 6);
      //   filteredList = groupByDayAndTakeLast(chartList, start, 7);

      //   if (filteredList.length < 2) {
      //     filteredList = generateFakePoints(lastPoint, start, 24 * 60, 7);
      //   }
      //   break;
      // }

      // case 'max': {
      //   const firstDate = startOfDay(fromUnixTime(chartList[0].time));
      //   const lastDate = startOfDay(
      //     fromUnixTime(chartList[chartList.length - 1].time),
      //   );
      //   const totalDays =
      //     Math.ceil(
      //       (getUnixTime(lastDate) - getUnixTime(firstDate)) / (24 * 60 * 60),
      //     ) + 1;

      //   filteredList = groupByDayAndTakeLast(chartList, firstDate, totalDays);
      //   break;
      // }

      default:
        filteredList = chartList;
    }

    filteredList.sort((a, b) => a.time - b.time);

    return filteredList;
  };

  const chartList = filterChartData(rawChartList, chartTime);

  return (
    <VStack
      maxWidth="640px"
      width="100%"
      background="#ECEDEE"
      borderRadius="24px"
      gap={6}
      padding={{
        base: 4,
        md: 8,
      }}
      alignItems="baseline"
    >
      {isLoading || isInitialLoading || isSecondaryError || isInitialError ? (
        <Stack
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
          justifySelf="center"
          flexGrow={1}
        >
          <AppPreloader position="unset" />
        </Stack>
      ) : (
        <>
          <HStack width="100%" justifyContent="space-between">
            <span
              className={css({
                textStyle: 'subtitle1',
              })}
            >
              Chart
            </span>
            <Button
              className={css({
                cursor: 'pointer',
              })}
              appearance="ghost"
              css={{
                display: {
                  base: 'flex',
                  lg: 'none',
                },
                _hover: {
                  backgroundColor: 'transparent',
                },
              }}
              gap={1}
              onClick={() => setExpand((prev) => !prev)}
            >
              <span>{expand ? 'Hide chart' : 'Show chart'}</span>{' '}
              <Image
                style={{
                  transform: `rotate(${expand ? '180deg' : '0'})`,
                }}
                width={32}
                height={32}
                src={Arrow}
                alt="arrow"
              />
            </Button>
          </HStack>

          {chartData?.historicalPairMetrics?.length ||
          chartDataInverse?.historicalPairMetrics?.length ? (
            <VStack
              w="full"
              css={{
                display: {
                  base: expand ? 'flex' : 'none',
                  lg: 'flex',
                },
              }}
            >
              <VStack gap={4} width="100%" alignItems="baseline">
                <div className={hstack({ gap: 2, alignItems: 'center' })}>
                  <div
                    className={css({
                      position: 'relative',
                      display: 'flex',
                      width: '1/12',
                      minWidth: 'fit-content',
                    })}
                  >
                    <TokenLogo
                      address={inputTokenInfo?.address as Address}
                      chainId={chainId}
                      size={5}
                      // overridePic={overrideAPic}
                    />
                    <TokenLogo
                      address={outputTokenInfo?.address as Address}
                      chainId={chainId}
                      size={5}
                      // overridePic={overrideBPic}
                      className={css({
                        marginLeft: -2,
                      })}
                    />
                  </div>

                  <div
                    className={css({
                      textStyle: 'subtitle3',
                      color: '#373737',
                    })}
                  >
                    {inputTokenInfo.symbol} / {outputTokenInfo.symbol}
                  </div>
                  <AiOutlineSwapVertical
                    width={16}
                    height={16}
                    className={css({
                      transform: 'rotate(90deg)',
                      color: '#67696E',
                    })}
                  />
                </div>
                <HStack>
                  <HStack
                    className={css({
                      color: '#111111',
                      textStyle: 'subtitle2',
                    })}
                  >
                    {+chartData?.historicalPairMetrics?.[
                      chartData.historicalPairMetrics?.length - 1
                    ]?.token1Price ||
                      +chartDataInverse?.historicalPairMetrics?.[
                        chartDataInverse.historicalPairMetrics?.length - 1
                      ]?.token0Price}
                    {'  '} {outputTokenInfo.symbol}
                  </HStack>
                  {/*<span*/}
                  {/*  className={css({*/}
                  {/*    color: '#51935C',*/}
                  {/*    textStyle: 'body1',*/}
                  {/*  })}*/}
                  {/*>*/}
                  {/*  +0.13%*/}
                  {/*</span>*/}
                </HStack>
              </VStack>
              {inputTokenInfo?.address &&
              outputTokenInfo?.address &&
              (chartData?.historicalPairMetrics?.length ||
                chartDataInverse?.historicalPairMetrics?.length) ? (
                <Stack
                  borderRadius="16px"
                  padding={{
                    base: '16px',
                    md: '20px',
                  }}
                  background="white"
                  width="100%"
                >
                  <HStack>
                    {chartTabs.map((option) => (
                      <span
                        key={option}
                        className={css({
                          fontSize: '14px',
                          cursor: 'pointer',
                          fontWeight: 700,
                          color: chartTime === option ? '#2F80ED' : '#9498A2',
                          transition: 'color 0.2s ease',
                        })}
                        onClick={() =>
                          setChartTime(
                            option as 'live' | '4h',
                            // | '1d' | '1w' | 'max',
                          )
                        }
                      >
                        {chartLabels[option]}
                      </span>
                    ))}
                  </HStack>
                  <Chart
                    data={chartList}
                    areaOptions={areaOptions}
                    chartOptions={chartOptions}
                    timeChartOptions={timeChartOptions}
                  />
                </Stack>
              ) : null}
            </VStack>
          ) : null}
        </>
      )}
    </VStack>
  );
};
