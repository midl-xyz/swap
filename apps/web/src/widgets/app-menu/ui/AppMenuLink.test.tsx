import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

import {
  AppMenuLink as AppMenuLinkComp,
  type AppMenuLink,
} from './AppMenuLink';

const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

function renderLink(link: AppMenuLink, onClick = vi.fn()) {
  return render(<AppMenuLinkComp link={link} onClick={onClick} />);
}

function getAnchorsByLabelFrom(container: HTMLElement, label: string) {
  return within(container)
    .getAllByText(label)
    .map((el) => el.closest('a') || (el as HTMLElement));
}

describe('AppMenuLink', () => {
  beforeEach(() => {
    mockUsePathname.mockReset();
  });

  it('renders label and href', () => {
    mockUsePathname.mockReturnValue('/');
    const { container } = renderLink({ label: 'Swap', href: '/swap' });

    const anchor = getAnchorsByLabelFrom(
      container,
      'Swap',
    )[0] as HTMLAnchorElement;
    expect(anchor.getAttribute('href')).toBe('/swap');
  });

  it('marks link active and shows dot when pathname matches exactly if isExact', () => {
    mockUsePathname.mockReturnValue('/swap');
    const { container } = renderLink({
      label: 'Swap',
      href: '/swap',
      isExact: true,
    });

    const anchors = getAnchorsByLabelFrom(container, 'Swap');
    expect(anchors.some((a) => a.getAttribute('data-active') === 'true')).toBe(
      true,
    );
    const active = anchors.find((a) => a.getAttribute('data-active') === 'true')!;
    expect(active.querySelector('span')).toBeTruthy();
  });

  it('is active when pathname starts with href if not exact', () => {
    mockUsePathname.mockReturnValue('/liquidity/positions');
    const { container } = renderLink({
      label: 'My Liquidity',
      href: '/liquidity',
    });

    const anchors = getAnchorsByLabelFrom(container, 'My Liquidity');
    expect(anchors.some((a) => a.getAttribute('data-active') === 'true')).toBe(
      true,
    );
  });

  it('is not active when pathname differs and exact required', () => {
    mockUsePathname.mockReturnValue('/swap/advanced');
    const { container } = renderLink({
      label: 'Swap',
      href: '/swap',
      isExact: true,
    });

    const anchors = getAnchorsByLabelFrom(container, 'Swap');
    expect(anchors.every((a) => a.getAttribute('data-active') !== 'true')).toBe(
      true,
    );
    anchors.forEach((a) => expect(a.querySelector('span')).toBeNull());
  });

  it('respects openOnSeparateTab with target and rel', () => {
    mockUsePathname.mockReturnValue('/');
    const { container } = renderLink({
      label: 'External',
      href: 'https://example.com',
      openOnSeparateTab: true,
    });

    const anchor = getAnchorsByLabelFrom(
      container,
      'External',
    )[0] as HTMLAnchorElement;
    expect(anchor.getAttribute('target')).toBe('_blank');
    expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('calls onClick when clicked', () => {
    mockUsePathname.mockReturnValue('/');
    const onClick = vi.fn();
    const { container } = renderLink({ label: 'Swap', href: '/swap' }, onClick);

    const anchor = getAnchorsByLabelFrom(container, 'Swap')[0];
    fireEvent.click(anchor);
    expect(onClick).toHaveBeenCalled();
  });
});
