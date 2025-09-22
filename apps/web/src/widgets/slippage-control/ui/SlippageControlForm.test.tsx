import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
vi.mock('@/features', async (orig) => {
  const actual = await (orig as any)();
  return {
    ...actual,
    useSlippage: vi.fn(),
  };
});

import { useSlippage } from '@/features';
import { SlippageControlForm } from './SlippageControlForm';

describe('SlippageControlForm', () => {
  const setSlippage = vi.fn();
  const onClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useSlippage).mockReturnValue([0.01, setSlippage]);
  });

  it('clamps negative input to 0 on submit', async () => {
    render(<SlippageControlForm onClose={onClose} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: '-5' } });

    const saveBtn = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveBtn);

    expect(setSlippage).toHaveBeenCalledWith(0);
    expect(onClose).toHaveBeenCalled();
  });

  it('with autoCommit clamps empty input to 0 (no NaN)', async () => {
    render(<SlippageControlForm onClose={onClose} autoCommit />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: '' } });

    expect(setSlippage).toHaveBeenCalled();
    const lastCall = setSlippage.mock.calls.at(-1);
    expect(lastCall?.[0]).toBe(0);
  });

  it('preset button 0.5% sets value and submit calls 0.005', async () => {
    render(<SlippageControlForm onClose={onClose} />);

    const halfBtn = screen.getByRole('button', { name: '0.5%' });
    fireEvent.click(halfBtn);

    const saveBtn = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveBtn);

    expect(setSlippage).toHaveBeenCalledWith(0.005);
    expect(onClose).toHaveBeenCalled();
  });
});
