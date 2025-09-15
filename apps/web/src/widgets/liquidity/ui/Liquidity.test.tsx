import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { Liquidity } from './Liquidity';

// Mocks
const mockUseLiquidityPositions = vi.fn();
const mockUseEVMAddress = vi.fn();

vi.mock('@/features/liquidity', () => ({
  useLiquidityPositions: (...args: any[]) => mockUseLiquidityPositions(...args),
}));

vi.mock('@midl-xyz/midl-js-executor-react', () => ({
  useEVMAddress: () => mockUseEVMAddress(),
}));

// Child component stub to make counting rendered items stable
vi.mock('@/features/liquidity/ui/liquidity', () => ({
  LiquidityItem: (props: any) => (
    <div data-testid="liquidity-item">{props?.liquidityToken}</div>
  ),
}));

function makePosition(overrides?: Partial<any>) {
  return {
    id: '0xpos',
    lastUpdatedAt: '123',
    liquidityTokenBalance: 10,
    pair: {
      id: '0x0000000000000000000000000000000000000001',
      token0: { id: '0x0000000000000000000000000000000000000002' },
      token1: { id: '0x0000000000000000000000000000000000000003' },
      reserve0: '100',
      reserve1: '200',
      lpTotalSupply: '1000',
    },
    ...overrides,
  };
}

describe('Liquidity widget', () => {
  beforeEach(() => {
    mockUseEVMAddress.mockReturnValue(
      '0x00000000000000000000000000000000000000aa',
    );
  });

  it('shows preloader while fetching', () => {
    mockUseLiquidityPositions.mockReturnValue({
      data: undefined,
      isFetching: true,
    });

    const { container } = render(<Liquidity />);

    // AppPreloader renders several .loader blocks
    expect(container.querySelector('.loader')).toBeTruthy();
  });

  it('shows empty state when all positions have zero balance', () => {
    mockUseLiquidityPositions.mockReturnValue({
      data: {
        currentLiquidityPositions: [
          makePosition({ liquidityTokenBalance: 0 }),
          makePosition({ id: '0xpos2', liquidityTokenBalance: 0 }),
        ],
      },
      isFetching: false,
    });

    render(<Liquidity />);

    expect(screen.getByText(/No liquidity found/i)).toBeInTheDocument();
    expect(screen.queryByTestId('liquidity-item')).toBeNull();
  });

  it('renders only positions with positive balance', () => {
    mockUseLiquidityPositions.mockReturnValue({
      data: {
        currentLiquidityPositions: [
          makePosition({ liquidityTokenBalance: 0 }),
          makePosition({ id: '0xpos2', liquidityTokenBalance: 5 }),
          makePosition({ id: '0xpos3', liquidityTokenBalance: 10 }),
        ],
      },
      isFetching: false,
    });

    render(<Liquidity />);

    const items = screen.getAllByTestId('liquidity-item');
    expect(items).toHaveLength(2);
  });
});
