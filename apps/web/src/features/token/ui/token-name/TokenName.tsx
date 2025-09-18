'use client';
/* eslint-disable @next/next/no-img-element */
import { TokenTag, useToken } from '@/entities';
import { TokenLogo } from '@/features';
import { tokenList } from '@/global';
import { useToken as useMidlToken } from '@midl-xyz/midl-js-executor-react';
import { useMemo } from 'react';
import { Address } from 'viem';
import { css } from '~/styled-system/css';
import { HStack } from '~/styled-system/jsx';
import { hstack, vstack } from '~/styled-system/patterns';
import CommunityTag from '@/features/token/assets/community-tag.svg';
import BagWarsTag from '@/features/token/assets/bag-wars-tag.svg';
import Image from 'next/image';
import { Tooltip } from '@/shared/ui/tooltip/Tooltip';

type TokenNameProps = {
  address: Address;
  chainId: number;
  showName?: boolean;
  shorten?: boolean;
  showTags?: boolean;
};

const COMMUNITY_LOGO_BY_TAG = {
  COMMUNITY: CommunityTag,
  BAG_WARS: BagWarsTag,
};

const TAG_LABEL_BY_TAG: Record<TokenTag, string> = {
  COMMUNITY: 'COMMUNITY',
  BAG_WARS: 'BAG WARS',
};

export const TokenName = ({
  address,
  chainId,
  showName,
  shorten,
  showTags = false,
}: TokenNameProps) => {
  const { name } = useToken(address, chainId);
  const { rune } = useMidlToken(address);

  const rawLabel = rune?.name ?? name;

  const displayLabel = useMemo(() => {
    if (!shorten || !rawLabel || rawLabel.length <= 8) return rawLabel;
    return `${rawLabel.slice(0, 3)}…${rawLabel.slice(-3)}`;
  }, [shorten, rawLabel]);

  const tags = showTags
    ? tokenList.find((it) => it.address === address)?.tags || []
    : [];

  return (
    <span
      className={hstack({
        gap: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'full',
      })}
    >
      <TokenLogo address={address} chainId={chainId} runeId={rune?.id} />
      <span
        className={vstack({
          gap: 0,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        })}
      >
        <HStack>
          {displayLabel}
          {tags.map((tag) => {
            const label = TAG_LABEL_BY_TAG[tag] ?? tag;
            return (
              <Tooltip key={tag} content={label} side="right">
                <span>
                  <Image
                    src={COMMUNITY_LOGO_BY_TAG[tag]}
                    alt="tag"
                    width={showName ? 16 : 24}
                    height={showName ? 16 : 24}
                  />
                </span>
              </Tooltip>
            );
          })}
        </HStack>
        {showName && (
          <span
            className={css({
              textStyle: 'caption',
            })}
          >
            {rune?.spaced_name ?? name}
          </span>
        )}
      </span>
    </span>
  );
};
