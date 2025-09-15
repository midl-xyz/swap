import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { AppMenuList } from './AppMenu';

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: any) => (
    <a href={href as string} {...rest}>
      {children}
    </a>
  ),
}));

const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

vi.mock('~/styled-system/css', () => ({
  css: () => 'css-mock',
}));

beforeEach(() => {
  mockUsePathname.mockReturnValue('/');
});

describe('AppMenuList', () => {
  it('renders all menu items', () => {
    const { container } = render(<AppMenuList />);

    const labels = [
      'Swap',
      'My Liquidity',
      'All Pairs',
      'Stable',
      'Guide',
      'Earn Midl',
    ];

    for (const label of labels) {
      expect(within(container).getAllByText(label)[0]).toBeTruthy();
    }
  });

  it('external links open in a new tab', () => {
    const { container } = render(<AppMenuList />);

    {
      const el = within(container)
        .getAllByText('Stable')[0]
        .closest('a') as HTMLAnchorElement;
      expect(el).toBeTruthy();
      expect(el.getAttribute('target')).toBe('_blank');
    }
    {
      const el = within(container)
        .getAllByText('Guide')[0]
        .closest('a') as HTMLAnchorElement;
      expect(el).toBeTruthy();
      expect(el.getAttribute('target')).toBe('_blank');
    }
    {
      const el = within(container)
        .getAllByText('Earn Midl')[0]
        .closest('a') as HTMLAnchorElement;
      expect(el).toBeTruthy();
      expect(el.getAttribute('target')).toBe('_blank');
    }
  });

  it('calls onClick handler when a menu item is clicked', () => {
    const onClick = vi.fn();
    const { container } = render(<AppMenuList onClick={onClick} />);

    fireEvent.click(within(container).getAllByText('Swap')[0]);
    expect(onClick).toHaveBeenCalled();
  });

  it('does not fail without onClick', () => {
    const { container } = render(<AppMenuList />);
    fireEvent.click(within(container).getAllByText('Swap')[0]);
  });
});
