import { Token, useToken } from '@/entities';
import { TokenName, useLastUsedTokens } from '@/features';
import { tokenList } from '@/global';
import { Button, Input } from '@/shared';
import { SearchIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Address, getAddress } from 'viem';
import { useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type TokenSelectProps = {
  onSelect: (address: string, chainId: number) => void;
};

export const TokenSelect = ({ onSelect }: TokenSelectProps) => {
  const { tokens: lastUsedTokens, addToken } = useLastUsedTokens();
  const chainId = useChainId();

  const onSubmit = (address: Address, chainId: number) => {
    addToken(chainId, address);
    onSelect(address, chainId);
  };

  const [filteredTokens, setFilteredTokens] = useState<Token[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.trim());
  };

  const onSearch = useCallback(() => {
    if (!searchQuery) {
      setFilteredTokens([]);
      return;
    }

    setFilteredTokens(
      tokenList.filter((it) => {
        const symbol = it.symbol.toLowerCase();
        const name = it.name.toLowerCase();
        const address = it.address.toLowerCase();

        const query = searchQuery.toLowerCase();

        return (
          symbol.includes(query) ||
          name.includes(query) ||
          address.includes(query)
        );
      }),
    );
  }, [searchQuery]);

  let customTokenAddress;
  try {
    customTokenAddress = getAddress(searchQuery);
  } catch {}

  const customToken = useToken(customTokenAddress as Address, chainId);

  console.log(customToken);

  useEffect(() => {
    onSearch();
  }, [searchQuery, onSearch]);

  const popularTokens = tokenList.filter((it) => it.chainId === chainId) || [];

  return (
    <div className={vstack({ gap: 4, alignItems: 'stretch', width: 'full' })}>
      <div
        className={css({
          position: 'relative',
        })}
      >
        <SearchIcon
          className={css({
            position: 'absolute',
            top: '50%',
            left: 3,
            transform: 'translateY(-50%)',
            color: 'neutral.400',
          })}
        />
        <Input
          placeholder="Search name or paste address"
          appearance="secondary"
          onChange={onSearchInput}
          maxLength={42}
          css={{ ps: 11 }}
        />
      </div>

      {!searchQuery && (
        <div className={hstack({ gap: 1, flexWrap: 'wrap' })}>
          {Array.from(lastUsedTokens.get(chainId) || []).map((address) => (
            <Button
              key={address}
              appearance="secondary"
              onClick={() => {
                onSubmit(address, chainId);
              }}
            >
              <TokenName address={address} chainId={chainId} />
            </Button>
          ))}
        </div>
      )}

      <h3>{searchQuery ? 'Search results' : 'Popular tokens'}</h3>

      <div
        className={vstack({
          gap: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        })}
      >
        {(searchQuery ? filteredTokens : popularTokens).map(
          ({ address, chainId }) => (
            <Button
              key={address}
              onClick={() => onSubmit(address, chainId)}
              appearance="ghost"
              className={css({
                width: '100%',
                justifyContent: 'flex-start',
                textAlign: 'left',
              })}
            >
              <TokenName address={address} chainId={chainId} showName />
            </Button>
          ),
        )}
      </div>

      {searchQuery && filteredTokens.length === 0 && (
        <div>
          {customToken.symbol !== 'N/A' ? (
            <Button
              onClick={() => {
                onSubmit(customToken.address, chainId);
              }}
              appearance="ghost"
              className={css({
                width: '100%',
                justifyContent: 'flex-start',
                textAlign: 'left',
              })}
            >
              <TokenName
                address={customToken.address}
                chainId={chainId}
                showName
              />
            </Button>
          ) : (
            <div
              className={css({
                color: 'neutral.400',
              })}
            >
              No results
            </div>
          )}
        </div>
      )}
    </div>
  );
};
