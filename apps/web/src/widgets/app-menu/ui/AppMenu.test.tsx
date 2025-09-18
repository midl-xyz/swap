import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppMenuList } from './AppMenu';

const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

beforeEach(() => {
  mockUsePathname.mockReturnValue('/');
});

describe('AppMenuList', () => {
  it('renders all menu items', () => {
    render(<AppMenuList />);

    const labels = [
      'Swap',
      'My Liquidity',
      'All Pairs',
      'Stable',
      'Guide',
      'Earn Midl',
    ];

    for (const label of labels) {
      expect(screen.getByText(label)).toBeTruthy();
    }
  });

  it('external links open in a new tab', () => {
    render(<AppMenuList />);

    for (const label of ['Stable', 'Guide', 'Earn Midl']) {
      const el = screen.getByText(label).closest('a') as HTMLAnchorElement;
      expect(el).toBeTruthy();
      expect(el.getAttribute('target')).toBe('_blank');
    }
  });

  it('calls onClick handler when a menu item is clicked', () => {
    const onClick = vi.fn();
    render(<AppMenuList onClick={onClick} />);

    fireEvent.click(screen.getByText('Swap'));
    expect(onClick).toHaveBeenCalled();
  });

  it('does not fail without onClick', () => {
    render(<AppMenuList />);
    fireEvent.click(screen.getByText('Swap'));
  });
});
