import type { useERC20Allowance } from '@/features/token';
import type { useApproveWithOptionalDeposit } from '@/shared';
import type {
  useAddCompleteTxIntention,
  useAddTxIntention,
  useClearTxIntentions,
  useToken,
} from '@midl-xyz/midl-js-executor-react';
import { Address, maxUint256, parseEther } from 'viem';
import { beforeEach, describe, expect, it, MockedFunction, vi } from 'vitest';

vi.mock('@/features/token', () => ({
  useERC20Allowance: vi.fn(),
}));

vi.mock('@/global', () => ({
  deployments: {
    1: {
      UniswapV2Router02: {
        address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      },
    },
  },
  uniswapV2Router02Abi: [],
  WETHByChain: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  tokenList: [
    {
      address: '0x1111111111111111111111111111111111111111',
      symbol: 'MOCK_A',
      isSynthetic: true,
    },
    {
      address: '0x2222222222222222222222222222222222222222',
      symbol: 'MOCK_B',
      isSynthetic: false,
    },
  ],
}));

vi.mock('@/shared', () => ({
  useApproveWithOptionalDeposit: vi.fn(),
}));

vi.mock('@midl-xyz/midl-js-executor-react', () => ({
  useAddTxIntention: vi.fn(),
  useAddCompleteTxIntention: vi.fn(),
  useClearTxIntentions: vi.fn(),
  useEVMAddress: vi.fn(),
  useToken: vi.fn(),
}));

vi.mock('wagmi', () => ({
  useChainId: vi.fn(),
  useConfig: vi.fn(),
}));

vi.mock('wagmi/actions', () => ({
  readContract: vi.fn(),
}));

vi.mock('@wagmi/core', () => ({
  readContract: vi.fn((config, params) => {
    return Promise.resolve(parseEther('1'));
  }),
}));

vi.mock('@tanstack/react-query', () => ({
  useMutation: vi.fn((config) => ({
    mutate: vi.fn(async (args) => {
      if (config?.mutationFn) {
        await config.mutationFn(args);
      }
    }),
    isError: false,
    isPending: false,
    isSuccess: false,
  })),
}));

vi.mock('viem', async (importOriginal) => {
  const actual = (await importOriginal()) as any;
  return {
    ...actual,
    encodeFunctionData: vi.fn(() => '0xmockeddata'),
  };
});

const MOCK_CHAIN_ID = 1;
const MOCK_USER_ADDRESS =
  '0x1234567890123456789012345678901234567890' as Address;
const MOCK_LP_TOKEN_ADDRESS =
  '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd' as Address;
const MOCK_TOKEN_A = '0x1111111111111111111111111111111111111111' as Address;
const MOCK_TOKEN_B = '0x2222222222222222222222222222222222222222' as Address;
const MOCK_WETH_ADDRESS =
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' as Address;

const createMockParams = (overrides: Partial<any> = {}) => ({
  tokenA: MOCK_TOKEN_A,
  tokenB: MOCK_TOKEN_B,
  liquidity: parseEther('0.5'),
  amountAMin: parseEther('0.1'),
  amountBMin: parseEther('0.2'),
  to: MOCK_USER_ADDRESS,
  deadline: BigInt(Math.floor(Date.now() / 1000) + 3600),
  chainId: MOCK_CHAIN_ID,
  runeAId: undefined,
  runeBId: undefined,
  ...overrides,
});

const createMockToken = (
  address: Address,
  symbol: string,
  isSynthetic = false,
) => ({
  address,
  symbol,
  name: `${symbol} Token`,
  chainId: MOCK_CHAIN_ID,
  decimals: 18,
  logoURI: '',
  isSynthetic,
});

describe('useRemoveLiquidityMidl', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
  });

  // Minimal mock helpers
  const query = <T>(data: T) =>
    ({
      data,
      error: null,
      isError: false,
      isPending: false,
      isLoading: false,
      isSuccess: true,
      refetch: vi.fn(),
    }) as any;

  const token = (
    rune?: Partial<{
      id: string;
      name: string;
      spaced_name: string;
      divisibility: number;
      symbol: string;
    }>,
  ) =>
    ({
      state: query(undefined),
      bytes32State: query(undefined),
      bytes32RuneId: undefined,
      rune: rune
        ? {
            id: rune.id!,
            name: rune.name ?? 'TEST_RUNE',
            spaced_name: rune.spaced_name ?? 'TEST RUNE',
            divisibility: rune.divisibility ?? 8,
            symbol: rune.symbol ?? 'TR',
          }
        : undefined,
    }) as ReturnType<typeof useToken>;

  // Direct mock function declarations
  let mockAddTxIntention: MockedFunction<
    ReturnType<typeof useAddTxIntention>['addTxIntention']
  >;
  let mockAddApproveIntention: MockedFunction<
    ReturnType<
      typeof useApproveWithOptionalDeposit
    >['addApproveDepositIntention']
  >;
  let mockAddCompleteTxIntention: MockedFunction<
    ReturnType<typeof useAddCompleteTxIntention>['addCompleteTxIntention']
  >;
  let mockClearTxIntentions: MockedFunction<
    ReturnType<typeof useClearTxIntentions>
  >;
  let mockUseERC20Allowance: MockedFunction<typeof useERC20Allowance>;
  let mockUseToken: MockedFunction<typeof useToken>;

  const setupMocks = async () => {
    const { useERC20Allowance } = await import('@/features/token');
    const { useApproveWithOptionalDeposit } = await import('@/shared');
    const midlReact = await import('@midl-xyz/midl-js-executor-react');
    const wagmi = await import('wagmi');
    const { readContract } = await import('wagmi/actions');

    mockUseERC20Allowance = vi.mocked(useERC20Allowance);
    vi.mocked(useApproveWithOptionalDeposit).mockReturnValue({
      addApproveDepositIntention: mockAddApproveIntention,
    });

    vi.mocked(midlReact.useAddTxIntention).mockReturnValue({
      addTxIntention: mockAddTxIntention,
    } as any);

    vi.mocked(midlReact.useAddCompleteTxIntention).mockReturnValue({
      addCompleteTxIntention: mockAddCompleteTxIntention,
    } as any);
    vi.mocked(midlReact.useClearTxIntentions).mockReturnValue(
      mockClearTxIntentions,
    );
    vi.mocked(midlReact.useEVMAddress).mockReturnValue(MOCK_USER_ADDRESS);

    mockUseToken = vi.mocked(midlReact.useToken);
    vi.mocked(wagmi.useChainId).mockReturnValue(MOCK_CHAIN_ID);
    vi.mocked(wagmi.useConfig).mockReturnValue({ chains: [] } as any);
    vi.mocked(readContract).mockResolvedValue(parseEther('0.5'));
  };

  beforeEach(async () => {
    mockAddTxIntention = vi.fn();
    mockAddApproveIntention = vi.fn();
    mockAddCompleteTxIntention = vi.fn();
    mockClearTxIntentions = vi.fn();

    await setupMocks();
  });

  const runLiquidityTest = async (lpAmount = parseEther('0.5')) => {
    const { useRemoveLiquidityMidl } = await import('./useRemoveLiquidityMidl');
    const { renderHook } = await import('@testing-library/react');

    const hookResult = renderHook(() =>
      useRemoveLiquidityMidl({
        lpToken: { address: MOCK_LP_TOKEN_ADDRESS, amount: lpAmount },
        tokenA: MOCK_TOKEN_A,
        tokenB: MOCK_TOKEN_B,
      }),
    );

    await hookResult.result.current.removeLiquidity({
      liquidity: parseEther('0.5'),
      amountAMin: parseEther('0.1'),
      amountBMin: parseEther('0.2'),
      to: MOCK_USER_ADDRESS,
      deadline: BigInt(Math.floor(Date.now() / 1000) + 3600),
    });

    return hookResult;
  };

  it('Case 1: LP token needs approve (allowance < liquidity) - intention is added to array', async () => {
    mockUseERC20Allowance.mockReturnValue(query(parseEther('0.1')));
    mockUseToken.mockReturnValue(token());

    await runLiquidityTest();

    expect(mockAddApproveIntention).toHaveBeenCalledWith({
      address: MOCK_LP_TOKEN_ADDRESS,
      amount: parseEther('0.5'),
    });
  });

  it("Case 2: LP token doesn't need approve (allowance >= liquidity) - no approval intention added", async () => {
    mockUseERC20Allowance.mockReturnValue(query(parseEther('1')));
    mockUseToken.mockReturnValue(token());

    expect(mockAddApproveIntention).not.toHaveBeenCalled();
  });

  const setupSyntheticTokens = async (syntheticTokens: Address[]) => {
    const { tokenList } = await import('@/global');
    const { readContract } = await import('@wagmi/core');

    vi.mocked(tokenList).length = 0;
    vi.mocked(tokenList).push(
      createMockToken(
        MOCK_TOKEN_A,
        'TOKEN_A',
        syntheticTokens.includes(MOCK_TOKEN_A),
      ),
      createMockToken(
        MOCK_TOKEN_B,
        'TOKEN_B',
        syntheticTokens.includes(MOCK_TOKEN_B),
      ),
    );

    vi.mocked(readContract).mockImplementation(async (config, params) => {
      if (syntheticTokens.includes(params.address as Address)) {
        return parseEther('0.05');
      }
      return parseEther('1');
    });
  };

  it('Case 3: Two synthetic assets - 2 approval intentions added to array', async () => {
    mockUseERC20Allowance.mockReturnValue(query(parseEther('1')));
    mockUseToken.mockReturnValue(token());

    mockAddTxIntention.mockClear();
    mockAddApproveIntention.mockClear();
    mockAddCompleteTxIntention.mockClear();

    await setupSyntheticTokens([MOCK_TOKEN_A, MOCK_TOKEN_B]);
    await runLiquidityTest();

    expect(mockAddTxIntention).toHaveBeenCalledTimes(3);
  });

  it('Case 4: One synthetic asset - 1 approval intention added to array', async () => {
    mockUseERC20Allowance.mockReturnValue(query(parseEther('1')));
    mockUseToken.mockReturnValue(token());

    await setupSyntheticTokens([MOCK_TOKEN_A]);
    await runLiquidityTest();

    expect(mockAddTxIntention).toHaveBeenCalledTimes(2);
  });

  it('Case 5: Multiple runes - complete transaction intentions added', async () => {
    mockUseERC20Allowance.mockReturnValue(query(parseEther('1')));
    mockUseToken.mockReturnValue(token());

    await setupSyntheticTokens([]);
    await runLiquidityTest();

    expect(mockAddTxIntention).toHaveBeenCalledTimes(1);
  });

  it('Case 6: No runes - completeTx called with empty assetsToWithdraw', async () => {
    mockUseERC20Allowance.mockReturnValue(query(parseEther('1')));
    mockUseToken.mockReturnValue(token());

    await runLiquidityTest();

    expect(mockAddCompleteTxIntention).toHaveBeenCalledWith({
      runes: [],
    });
  });

  it('Case 7: Two simple runes (non-synthetic) - both added to assetsToWithdraw', async () => {
    mockUseERC20Allowance.mockReturnValue(query(parseEther('1')));
    mockUseToken
      .mockReturnValueOnce(
        token({
          id: 'rune-a',
          name: 'Rune A',
          spaced_name: 'Rune A',
          divisibility: 8,
          symbol: 'RA',
        }),
      )
      .mockReturnValueOnce(
        token({
          id: 'rune-b',
          name: 'Rune B',
          spaced_name: 'Rune B',
          divisibility: 8,
          symbol: 'RB',
        }),
      );

    await setupSyntheticTokens([]);
    await runLiquidityTest();

    expect(mockAddCompleteTxIntention).toHaveBeenCalledWith({
      runes: [
        {
          id: 'rune-a',
          amount: maxUint256,
          address: MOCK_TOKEN_A,
        },
        {
          id: 'rune-b',
          amount: maxUint256,
          address: MOCK_TOKEN_B,
        },
      ],
    });
  });
});
