import { HStack, Stack } from '~/styled-system/jsx';

interface Props {
  tokenSymbol: string;
  secondTokenSymbol: string;
  tokenImg: string;
  priceUsd: number;
  priceInToken: number;
}

export const TokenPrice = ({
  tokenSymbol,
  priceUsd,
  priceInToken,
  tokenImg,
  secondTokenSymbol,
}: Props) => {
  return (
    <HStack paddingX={3} paddingY={2}>
      <Stack width="24px" height="24px">
        <img width="100%" height="100%" alt="toke-1" />
      </Stack>

      <span>
        1 {tokenSymbol} = {priceInToken} {secondTokenSymbol} ${priceUsd}
      </span>
    </HStack>
  );
};
