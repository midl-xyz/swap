import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home page (real components)', () => {
  it('redirects to /swap on render using Next.js redirect', () => {
    try {
      Home();
      throw new Error('Expected NEXT_REDIRECT to be thrown, but it was not.');
    } catch (e: any) {
      const digest = e?.digest ?? e?.message ?? String(e);
      expect(digest).toContain('NEXT_REDIRECT');
    }
  });
});
