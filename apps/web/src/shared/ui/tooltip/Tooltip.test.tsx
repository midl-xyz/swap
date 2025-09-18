import React from 'react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip (shared/ui/tooltip/Tooltip)', () => {
  it('does not render content by default (closed state)', () => {
    render(
      <Tooltip content="Hello" delayDuration={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    expect(screen.queryByText('Hello')).not.toBeInTheDocument();
  });

  it('shows content on focus', () => {
    render(
      <Tooltip content="Hello" side="right" delayDuration={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText('Trigger');

    fireEvent.focus(trigger);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Hello');
  });
});
