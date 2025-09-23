import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

const mockSetSlippage = vi.fn();

vi.mock('@/features', () => ({
  useSlippage: () => [0.015, mockSetSlippage] as const,
}));

import { SlippageControlForm } from './SlippageControlForm';

describe('SlippageControlForm', () => {
  beforeEach(() => {
    mockSetSlippage.mockReset();
    cleanup();
  });

  it('autoCommit=true: entering NaN auto-commits slippage = 0', async () => {
    render(<SlippageControlForm onClose={() => {}} autoCommit />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.input(input, { target: { value: 'NaN' } });

    await waitFor(() => expect(mockSetSlippage).toHaveBeenCalled());

    expect(mockSetSlippage).toHaveBeenLastCalledWith(0);
  });

  it('autoCommit=false: entering NaN then clicking Save commits slippage = 0 and closes', async () => {
    const onClose = vi.fn();

    render(<SlippageControlForm onClose={onClose} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.input(input, { target: { value: 'abc' } });

    const save = screen.getByRole('button', { name: 'Save' });
    fireEvent.click(save);

    await waitFor(() => expect(mockSetSlippage).toHaveBeenCalled());

    expect(mockSetSlippage).toHaveBeenLastCalledWith(0);
    expect(onClose).toHaveBeenCalled();
  });
});
