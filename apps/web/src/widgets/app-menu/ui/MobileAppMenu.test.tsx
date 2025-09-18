import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { MobileAppMenu } from './MobileAppMenu';
import { Wrapper } from '@/__tests__';

vi.mock('@/widgets', async () => {
  const mod = await import('./AppMenu');
  return { AppMenuList: mod.AppMenuList };
});

const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));


beforeEach(() => {
  mockUsePathname.mockReturnValue('/');
  document.body.innerHTML = '';
});

describe('MobileAppMenu', () => {
  it('opens dialog when menu icon is clicked and closes by overlay and X', () => {
    render(<MobileAppMenu />, { wrapper: Wrapper });

    expect(screen.queryByRole('dialog')).toBeNull();

    const menuButton = screen.getByAltText('menu-button');
    fireEvent.click(menuButton);
    expect(screen.getByRole('dialog')).toBeTruthy();

    fireEvent.click(screen.getByTestId('dialog-overlay'));
    expect(screen.queryByRole('dialog')).toBeNull();

    fireEvent.click(menuButton);
    expect(screen.getByRole('dialog')).toBeTruthy();

    fireEvent.click(screen.getByTestId('close-icon'));
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('closes dialog when a menu item is clicked', () => {
    render(<MobileAppMenu />, { wrapper: Wrapper });

    fireEvent.click(screen.getByAltText('menu-button'));
    expect(screen.getByRole('dialog')).toBeTruthy();

    fireEvent.click(screen.getAllByText('Swap')[0]);
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
