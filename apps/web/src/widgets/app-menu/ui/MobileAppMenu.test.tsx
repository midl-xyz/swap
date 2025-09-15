import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { MobileAppMenu } from './MobileAppMenu';

vi.mock('@/shared', () => ({
  Dialog: ({ open, children }: any) =>
    open ? <div data-testid="dialog">{children}</div> : null,
  DialogOverlay: ({ onClick }: any) => (
    <div data-testid="dialog-overlay" onClick={onClick} />
  ),
  DialogContent: ({ children, onEscapeKeyDown }: any) => (
    <div data-testid="dialog-content" onKeyDown={onEscapeKeyDown}>
      {children}
    </div>
  ),
}));

vi.mock('@/widgets', () => ({
  AppMenuList: ({ onClick }: any) => (
    <button onClick={onClick}>Mock Menu Item</button>
  ),
}));

vi.mock('@midl-xyz/satoshi-kit', () => ({
  ConnectButton: ({ beforeConnect }: any) => (
    <button onClick={beforeConnect}>Connect</button>
  ),
}));

vi.mock('next/image', () => ({
  default: (props: any) => <img alt="img" {...props} />,
}));

vi.mock('../assets/menu.svg', () => ({
  default: { src: 'menu.svg', width: 24, height: 24 },
}));

vi.mock('~/styled-system/jsx', () => ({
  Stack: ({ children }: any) => <div data-testid="stack">{children}</div>,
  VStack: ({ children }: any) => <div data-testid="vstack">{children}</div>,
}));

vi.mock('lucide-react', () => ({
  X: ({ onClick }: any) => (
    <button onClick={onClick} aria-label="close">
      X
    </button>
  ),
}));

describe('MobileAppMenu', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('opens dialog when menu icon is clicked and closes by overlay and X', () => {
    render(<MobileAppMenu />);

    expect(screen.queryByTestId('dialog')).toBeNull();

    const menuButton = screen.getByAltText('menu-button');
    fireEvent.click(menuButton);
    expect(screen.getByTestId('dialog')).toBeTruthy();

    fireEvent.click(screen.getByTestId('dialog-overlay'));
    expect(screen.queryByTestId('dialog')).toBeNull();

    fireEvent.click(menuButton);
    expect(screen.getByTestId('dialog')).toBeTruthy();

    const content = screen.getByTestId('dialog-content') as HTMLElement & {
      onclick?: any;
    };
    fireEvent.keyDown(content);
    expect(screen.queryByTestId('dialog')).toBeNull();
  });

  it('closes dialog when a menu item is clicked', () => {
    render(<MobileAppMenu />);

    fireEvent.click(screen.getByAltText('menu-button'));
    expect(screen.getByTestId('dialog')).toBeTruthy();

    fireEvent.click(screen.getByText('Mock Menu Item'));
    expect(screen.queryByTestId('dialog')).toBeNull();
  });

  it('closes dialog when Connect button is clicked (beforeConnect)', () => {
    render(<MobileAppMenu />);

    fireEvent.click(screen.getByAltText('menu-button'));
    expect(screen.getByTestId('dialog')).toBeTruthy();

    fireEvent.click(screen.getByText('Connect'));
    expect(screen.queryByTestId('dialog')).toBeNull();
  });
});
