import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppMenuLink } from './AppMenuLink';

const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('AppMenuLink', () => {
  beforeEach(() => {
    mockUsePathname.mockReset();
  });

  it('renders label and href', () => {
    mockUsePathname.mockReturnValue('/');
    render(<AppMenuLink link={{ label: 'Swap', href: '/swap' }} />);
    const anchor = screen.getByRole('link', { name: 'Swap' });

    expect(anchor.getAttribute('href')).toBe('/swap');
  });

  it('marks link active and shows dot when pathname matches exactly if isExact', () => {
    mockUsePathname.mockReturnValue('/swap');

    render(
      <AppMenuLink link={{ label: 'Swap', href: '/swap', isExact: true }} />,
    );

    const link = screen.getByRole('link', { name: 'Swap' });

    expect(link.getAttribute('data-active')).toBeTruthy();
    expect(link.querySelector("[data-testid='active-indicator']")).toBeTruthy();
  });

  it('is active when pathname starts with href if not exact', () => {
    mockUsePathname.mockReturnValue('/liquidity/positions');

    render(
      <AppMenuLink link={{ label: 'My Liquidity', href: '/liquidity' }} />,
    );

    const link = screen.getByRole('link', { name: 'My Liquidity' });

    expect(link.getAttribute('data-active')).toBeTruthy();
  });

  it('is not active when pathname differs and exact required', () => {
    mockUsePathname.mockReturnValue('/swap/advanced');

    render(
      <AppMenuLink link={{ label: 'Swap', href: '/swap', isExact: true }} />,
    );

    expect(
      screen
        .getAllByRole('link')
        .some((el) => el.getAttribute('data-active') === 'true'),
    ).toBeFalsy();
  });

  it('respects openOnSeparateTab with target and rel', () => {
    mockUsePathname.mockReturnValue('/');

    render(
      <AppMenuLink
        link={{
          label: 'External',
          href: 'https://example.com',
          openOnSeparateTab: true,
        }}
      />,
    );

    const link = screen.getByRole('link', { name: 'External' });
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('calls onClick when clicked', () => {
    mockUsePathname.mockReturnValue('/');
    const onClick = vi.fn();

    render(
      <AppMenuLink link={{ label: 'Swap', href: '/swap' }} onClick={onClick} />,
    );

    const anchor = screen.getByRole('link', { name: 'Swap' });
    fireEvent.click(anchor);
    expect(onClick).toHaveBeenCalled();
  });
});
