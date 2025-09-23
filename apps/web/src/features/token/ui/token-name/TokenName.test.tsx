import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Wrapper } from '@/__tests__/Wrapper';
import { Address } from 'viem';

let mockName = 'MyToken';
let mockRune: any = undefined;

vi.mock('@/entities', async () => ({
  useToken: () => ({ name: mockName }),
}));

vi.mock('@midl-xyz/midl-js-executor-react', async (importOriginal) => {
  const actual: any = await importOriginal();
  return {
    ...actual,
    useToken: () => ({ rune: mockRune }),
  };
});

vi.mock('next/image', async () => ({
  default: (props: any) => {
    return <img alt={undefined} {...props} />;
  },
}));

import { TokenName } from './TokenName';

const TEST_ADDRESS = '0x000000000000000000000000000000000000dEaD' as Address;
const CHAIN_ID = 1;

function renderWithWrapper(ui: React.ReactElement) {
  return render(ui, { wrapper: Wrapper as React.ComponentType });
}

describe('TokenName', () => {
  beforeEach(() => {
    mockName = 'MyToken';
    mockRune = undefined;
  });

  it('renders token name (no shortening) and no tags by default', () => {
    renderWithWrapper(<TokenName address={TEST_ADDRESS} chainId={CHAIN_ID} />);

    expect(screen.getByText('MyToken')).toBeInTheDocument();

    expect(screen.queryByAltText('tag')).not.toBeInTheDocument();
  });

  it('uses rune name when available', () => {
    mockRune = { id: 'rune-1', name: 'RuneName', spaced_name: 'Rune Name' };

    renderWithWrapper(<TokenName address={TEST_ADDRESS} chainId={CHAIN_ID} />);

    expect(screen.getByText('RuneName')).toBeInTheDocument();
  });

  it('shortens long names when shorten=true', () => {
    mockName = 'SuperLongToken'; // length > 8

    renderWithWrapper(
      <TokenName address={TEST_ADDRESS} chainId={CHAIN_ID} shorten />,
    );

    expect(screen.getByText('Sup…ken')).toBeInTheDocument();
  });

  it('shows secondary name (spaced_name or name) when showName=true', () => {
    mockRune = { id: 'r1', name: 'RuneName', spaced_name: 'Rune Name' };

    renderWithWrapper(
      <TokenName address={TEST_ADDRESS} chainId={CHAIN_ID} showName />,
    );

    expect(screen.getByText('Rune Name')).toBeInTheDocument();
  });

  it('renders tag icons when showTags=true and tokenList has tags', async () => {
    await vi.resetModules();

    vi.doMock('@/global', async () => ({
      tokenList: [{ address: TEST_ADDRESS, tags: ['COMMUNITY'] }],
    }));

    const { TokenName: TokenNameWithTags } = await import('./TokenName');

    render(
      <TokenNameWithTags address={TEST_ADDRESS} chainId={CHAIN_ID} showTags />,
      { wrapper: Wrapper as React.ComponentType },
    );

    const tags = screen.getAllByAltText('tag');
    expect(tags.length).toBe(1);
  });
});
