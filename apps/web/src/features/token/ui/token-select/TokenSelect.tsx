import { TokenName, useLastUsedTokens } from '@/features';
import { Button, Input } from '@/shared';
import { useChainId } from 'wagmi';

type TokenSelectProps = {
  onSelect: (address: string) => void;
};

export const TokenSelect = () => {
  const { tokens: lastUsedTokens, addToken } = useLastUsedTokens();
  const chainId = useChainId();

  const onSubmit = () => {};

  const popularTokens =
    new Map([[1, ['0x6b175474e89094c44da98b954eedeac495271d0f']]]).get(
      chainId,
    ) || [];

  return (
    <div>
      <Input placeholder="Search name or paste address" />

      <div>
        {Array.from(lastUsedTokens.get(chainId) || []).map((address) => (
          <Button key={address}>
            <TokenName address={address} chainId={chainId} />
          </Button>
        ))}
      </div>

      <h3>Popular tokens</h3>

      <div>
        {popularTokens.map((address) => (
          <Button key={address}>
            <TokenName address={address} chainId={chainId} />
          </Button>
        ))}
      </div>
    </div>
  );
};
