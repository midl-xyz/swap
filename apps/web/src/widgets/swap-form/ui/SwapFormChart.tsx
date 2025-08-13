'use client';

import { TokenLogo } from '@/features';
import { useGetPairPrices } from '@/features/liquidity/api/subgraph/useGetPairPrices';
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
import { getUnixTime, subDays, subHours, subWeeks } from 'date-fns';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
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

interface PairPriceData {
  pairPrices: Array<{
    token0: {
      tokenAddress: string;
      tokenPrice: string;
    };
    token1: {
      tokenAddress: string;
      tokenPrice: string;
    };
    timestamp: string;
  }>;
}

const chartTabs = ['live', '4h', '1d', '1w', 'max'];

export const SwapFormChart = ({ inputTokenInfo, outputTokenInfo }: Props) => {
  const chainId = useChainId();
  const [expand, setExpand] = useState(false);
  const [chartTime, setChartTime] = useState<
    'max' | '1w' | '1d' | '4h' | 'live'
  >('4h');

  const now = useMemo(() => getUnixTime(new Date()), []);

  const fromTime = useMemo(() => {
    const currentDate = new Date();
    switch (chartTime) {
      case 'live':
        return getUnixTime(subHours(currentDate, 1)); // Last hour for live
      case '4h':
        return getUnixTime(subHours(currentDate, 4));
      case '1d':
        return getUnixTime(subDays(currentDate, 1));
      case '1w':
        return getUnixTime(subWeeks(currentDate, 1));
      case 'max':
        return getUnixTime(subDays(currentDate, 365)); // 1 year for max
      default:
        return getUnixTime(subHours(currentDate, 4));
    }
  }, [chartTime]);

  const {
    data: chartData,
    isLoading,
    refetch,
  } = useGetPairPrices({
    maxPoints: 250,
    from: String(fromTime * 1000),
    to: String(now * 1000),
    token0Address:
      inputTokenInfo.address === zeroAddress
        ? WETHByChain[midlRegtest.id]
        : inputTokenInfo.address,
    token1Address:
      outputTokenInfo.address === zeroAddress
        ? WETHByChain[midlRegtest.id]
        : outputTokenInfo.address,
  });

  const typedChartData = chartData as PairPriceData | undefined;

  useEffect(() => {
    if (typedChartData?.pairPrices.length === 0) {
      setChartTime('max');
    }

    if (typedChartData && typedChartData.pairPrices.length > 0) {
      setExpand(true);
    }
  }, [typedChartData, refetch]);

  const rawChartList = typedChartData?.pairPrices.map(
    ({ timestamp, token0, token1 }) => {
      // Determine which token is the input token (or WETH equivalent)
      const inputTokenAddress =
        inputTokenInfo.address === zeroAddress
          ? WETHByChain[midlRegtest.id]
          : inputTokenInfo.address;

      // Return the price of the token that matches the input token
      const priceValue =
        token0.tokenAddress.toLowerCase() === inputTokenAddress.toLowerCase()
          ? parseFloat(token0.tokenPrice)
          : parseFloat(token1.tokenPrice);

      return {
        value: priceValue,
        time: Math.floor(+timestamp / 1000),
      };
    },
  );
  //.sort((a, b) => a.time - b.time);

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
      {isLoading ? (
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

          {typedChartData?.pairPrices?.length &&
          typedChartData?.pairPrices?.length > 0 ? (
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
                    {typedChartData.pairPrices.length > 0 &&
                      (
                        parseFloat(
                          typedChartData.pairPrices[
                            typedChartData.pairPrices.length - 1
                          ].token1.tokenPrice,
                        ) /
                        parseFloat(
                          typedChartData.pairPrices[
                            typedChartData.pairPrices.length - 1
                          ].token0.tokenPrice,
                        )
                      ).toFixed(6)}
                    {'  '} {outputTokenInfo.symbol} per {inputTokenInfo.symbol}
                  </HStack>
                </HStack>
              </VStack>
              {inputTokenInfo?.address && outputTokenInfo?.address && (
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
                            option as 'live' | '4h' | '1d' | '1w' | 'max',
                          )
                        }
                      >
                        {option.toUpperCase()}
                      </span>
                    ))}
                  </HStack>
                  <Chart
                    data={rawChartList || []}
                    areaOptions={areaOptions}
                    chartOptions={chartOptions}
                    timeChartOptions={timeChartOptions}
                  />
                </Stack>
              )}
            </VStack>
          ) : null}
        </>
      )}
    </VStack>
  );
};
