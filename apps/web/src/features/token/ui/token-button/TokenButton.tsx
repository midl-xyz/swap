import { TokenName } from '@/features';
import { Button } from '@/shared';

type TokenButtonProps = {
  address?: string;
  chainId?: number;
} & React.ComponentProps<typeof Button>;

export const TokenButton = ({
  address,
  chainId,
  ...rest
}: TokenButtonProps) => {
  if (!address || !chainId) {
    return <Button {...rest}>Select a token</Button>;
  }

  return (
    <Button {...rest}>
      <TokenName address={address} chainId={chainId} />
    </Button>
  );
};
