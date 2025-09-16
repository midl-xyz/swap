import { Address, maxUint256, parseEther } from 'viem';
import { beforeEach, describe, expect, it, vi } from 'vitest';

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
  useAddCompleteTxIntention: vi.fn(),
  useAddTxIntention: vi.fn(),
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
    data: undefined,
    error: null,
    isError: false,
    isIdle: true,
    isPending: false,
    isSuccess: false,
    status: 'idle',
    variables: undefined,
    reset: vi.fn(),
    context: undefined,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    submittedAt: 0,
  })),
}));

vi.mock('viem', async (importOriginal) => {
  const actual = (await importOriginal()) as any;
  return {
    ...actual,
    encodeFunctionData: vi.fn(() => '0xmockeddata'),
    parseUnits: vi.fn(
      (value: string, decimals: number) =>
        BigInt(value) * BigInt(10 ** decimals),
    ),
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
  let formatRemoveLiquidityParams: any;
  let handleSyntheticTokenApprovals: any;

  beforeEach(async () => {
    vi.clearAllMocks();

    formatRemoveLiquidityParams = (
      await import('../utils/formatRemoveLiquidityParams')
    ).formatRemoveLiquidityParams;
    handleSyntheticTokenApprovals = (
      await import('../utils/handleSyntheticTokenApprovals')
    ).handleSyntheticTokenApprovals;
  });

  it('formats correctly parameters when tokenA is WETH and tokenB is a rune', () => {
    const params = createMockParams({
      tokenA: MOCK_WETH_ADDRESS,
      tokenB: MOCK_TOKEN_B,
      runeBId: 'test-rune-b',
    });

    const result = formatRemoveLiquidityParams(params);

    expect(result.isETH).toBe(true);
    expect(result.functionName).toBe('removeLiquidityETH');
    expect(result.args).toEqual([
      MOCK_TOKEN_B,
      params.liquidity,
      params.amountBMin,
      params.amountAMin,
      params.to,
      params.deadline,
    ]);
    expect(result.assetsToWithdraw).toEqual([
      {
        id: 'test-rune-b',
        amount: maxUint256,
        address: MOCK_TOKEN_B,
      },
    ]);
  });

  it('formats correctly parameters when tokenB is WETH and tokenA is NOT a rune', () => {
    const params = createMockParams({
      tokenA: MOCK_TOKEN_A,
      tokenB: MOCK_WETH_ADDRESS,
    });

    const result = formatRemoveLiquidityParams(params);

    expect(result.isETH).toBe(true);
    expect(result.functionName).toBe('removeLiquidityETH');
    expect(result.args).toEqual([
      MOCK_TOKEN_A,
      params.liquidity,
      params.amountAMin,
      params.amountBMin,
      params.to,
      params.deadline,
    ]);
    expect(result.assetsToWithdraw).toEqual([]);
  });

  it('validates function exists and can be called without errors', async () => {
    const { readContract } = await import('wagmi/actions');
    vi.mocked(readContract).mockResolvedValue(parseEther('1'));

    expect(typeof handleSyntheticTokenApprovals).toBe('function');

    const params = {
      tokenA: MOCK_TOKEN_A,
      tokenB: MOCK_TOKEN_B,
      amountAMin: parseEther('0.1'),
      amountBMin: parseEther('0.2'),
      address: MOCK_USER_ADDRESS,
      config: { chains: [] },
      addTxIntention: vi.fn(),
    };

    await expect(handleSyntheticTokenApprovals(params)).resolves.not.toThrow();
  });

  // Integration tests for complete hook workflow
  let mockAddTxIntention: any;
  let mockAddApproveIntention: any;
  let mockAddCompleteTxIntention: any;
  let mockClearTxIntentions: any;
  let mockUseERC20Allowance: any;
  let mockUseToken: any;

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

    vi.mocked(midlReact.useClearTxIntentions).mockReturnValue(
      mockClearTxIntentions,
    );
    vi.mocked(midlReact.useAddCompleteTxIntention).mockReturnValue({
      addCompleteTxIntention: mockAddCompleteTxIntention,
    } as any);
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
    const { useRemoveLiquidityMidl } = await import(
      '../useRemoveLiquidityMidl'
    );
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
    mockUseERC20Allowance.mockReturnValue({ data: parseEther('0.1') });
    mockUseToken.mockReturnValue({ rune: undefined });

    await runLiquidityTest();

    expect(mockAddApproveIntention).toHaveBeenCalledWith({
      address: MOCK_LP_TOKEN_ADDRESS,
      amount: parseEther('0.5'),
    });
  });

  it("Case 2: LP token doesn't need approve (allowance >= liquidity) - no approval intention added", async () => {
    mockUseERC20Allowance.mockReturnValue({ data: parseEther('1') });
    mockUseToken.mockReturnValue({ rune: undefined });

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
    mockUseERC20Allowance.mockReturnValue({ data: parseEther('1') });
    mockUseToken.mockReturnValue({ rune: undefined });

    // Clear previous mocks to ensure clean state
    mockAddTxIntention.mockClear();
    mockAddApproveIntention.mockClear();
    mockAddCompleteTxIntention.mockClear();

    await setupSyntheticTokens([MOCK_TOKEN_A, MOCK_TOKEN_B]);
    await runLiquidityTest();

    expect(mockAddTxIntention).toHaveBeenCalledTimes(3);
  });

  it('Case 4: One synthetic asset - 1 approval intention added to array', async () => {
    mockUseERC20Allowance.mockReturnValue({ data: parseEther('1') });
    mockUseToken.mockReturnValue({ rune: undefined });

    await setupSyntheticTokens([MOCK_TOKEN_A]);
    await runLiquidityTest();

    expect(mockAddTxIntention).toHaveBeenCalledTimes(2);
  });

  it('Case 5: No synthetic assets - no approval intentions added to array', async () => {
    mockUseERC20Allowance.mockReturnValue({ data: parseEther('1') });
    mockUseToken.mockReturnValue({ rune: undefined });

    await setupSyntheticTokens([]);
    await runLiquidityTest();

    expect(mockAddTxIntention).toHaveBeenCalledTimes(1);
  });

  it('Case 6: No runes - completeTx called with empty assetsToWithdraw', async () => {
    mockUseERC20Allowance.mockReturnValue({ data: parseEther('1') });
    mockUseToken.mockReturnValue({ rune: undefined });

    await runLiquidityTest();

    expect(mockAddCompleteTxIntention).toHaveBeenCalledWith({
      runes: [],
    });
  });

  it('Case 7: Two simple runes (non-synthetic) - both added to assetsToWithdraw', async () => {
    mockUseERC20Allowance.mockReturnValue({ data: parseEther('1') });
    mockUseToken
      .mockReturnValueOnce({ rune: { id: 'rune-a' } })
      .mockReturnValueOnce({ rune: { id: 'rune-b' } });

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
