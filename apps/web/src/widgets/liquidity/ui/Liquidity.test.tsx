import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Wrapper } from '@/__tests__';
import { Liquidity } from './Liquidity';

const mockUseLiquidityPositions = vi.fn();

// Child component stub to make counting rendered items stable
vi.mock('@/features/liquidity/ui/liquidity', () => ({
  LiquidityItem: (props: any) => (
    <div data-testid="liquidity-item">{props?.liquidityToken}</div>
  ),
}));

vi.mock('@/features/liquidity', () => ({
  useLiquidityPositions: (...args: any[]) => mockUseLiquidityPositions(...args),
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
  it('shows preloader while fetching', () => {
    mockUseLiquidityPositions.mockReturnValue({
      data: undefined,
      isFetching: true,
    });

    render(<Liquidity />, { wrapper: Wrapper });

    expect(screen.findByLabelText('Loading')).toBeDefined();

    // TODO: Is this desired behavior?
    expect(screen.queryByTestId('liquidity-item')).toBeNull();
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

    render(<Liquidity />, { wrapper: Wrapper });

    expect(screen.getByText(/No liquidity found/i)).toBeTruthy();
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

    render(<Liquidity />, { wrapper: Wrapper });

    const items = screen.getAllByTestId('liquidity-item');
    expect(items).toHaveLength(2);
  });
});
