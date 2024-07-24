// import { useGetPools } from '@/features/liquidity';
import { useState } from 'react';
import { AiOutlineSwapVertical } from '@/shared/assets';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { css } from '~/styled-system/css';
import { Box, HStack, VStack } from '~/styled-system/jsx';

interface Props {
  inputTokenSymbol: string;
  outputTokenSymbol: string;
  currencyInUsd?: number;
  inputTokenAmount: number | string;
  outputTokenAmount: number | string;
  priceImpact?: number;
}

const SwapDetailsItem = ({
  name,
  value,
}: {
  name: string;
  value?: string | number;
}) => {
  return (
    <HStack width="100%" justifyContent="space-between" color="#9498A2">
      <span>{name}</span>
      <span>~{value}</span>
    </HStack>
  );
};

export const SwapDetails = ({
  inputTokenSymbol,
  outputTokenSymbol,
  inputTokenAmount,
  outputTokenAmount,
  currencyInUsd,
  priceImpact,
}: Props) => {
  // const { data: pools } = useGetPools();

  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={3.5}
      paddingX={7}
      gap={3}
      border="1px solid"
      borderColor="#E2E2E2"
      borderRadius="xl"
      onClick={handleToggle}
      cursor="pointer"
    >
      {' '}
      <HStack width="100%" justifyContent="space-between">
        <span>
          1 {outputTokenSymbol} ={' '}
          {Number(inputTokenAmount) / Number(outputTokenAmount)}{' '}
          {inputTokenSymbol}(${currencyInUsd})
        </span>
        <HStack gap={2.5}>
          <AiOutlineSwapVertical
            className={css({
              transform: 'rotate(90deg)',
              width: '24px',
              height: '24px',
            })}
          />
          {open ? (
            <ChevronUpIcon width={24} height={24} />
          ) : (
            <ChevronDownIcon width={24} height={24} />
          )}
        </HStack>
      </HStack>
      {open ? (
        <VStack alignItems="baseline" gap={3}>
          <SwapDetailsItem name="Price impact" value={priceImpact} />
          <SwapDetailsItem name="Receive at least" value="33.0125 USDT" />
          <SwapDetailsItem name="Fee" value="0.16$" />
          <SwapDetailsItem name="Network cost" value="$5.68" />
        </VStack>
      ) : null}
    </Box>
  );
};
