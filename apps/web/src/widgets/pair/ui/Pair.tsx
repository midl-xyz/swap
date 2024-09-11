import { TokenPrice } from '@/widgets/pair/ui/TokenPrice';
import { HStack, Stack, VStack } from '~/styled-system/jsx';

interface Props {
  id: string;
}

export const Pair = ({ id }: Props) => {
  return (
    <VStack>
      <HStack>
        <HStack>
          <Stack width="28px" height="28px">
            <img width="100%" height="100%" alt="toke-1" />
          </Stack>
          <Stack width="28px" height="28px">
            <img width="100%" height="100%" alt="toke-2" />
          </Stack>
        </HStack>
        <span>ETH-USDT Pair</span>
      </HStack>
      <HStack gap={6}>
        <TokenPrice
          tokenImg=""
          tokenSymbol="ETH"
          priceInToken={2.358}
          secondTokenSymbol="USDT"
          priceUsd={2.356}
        />
        <TokenPrice
          tokenImg=""
          tokenSymbol="USDT"
          priceInToken={0.0004}
          secondTokenSymbol="ETH"
          priceUsd={1.0}
        />
      </HStack>
    </VStack>
  );
};
