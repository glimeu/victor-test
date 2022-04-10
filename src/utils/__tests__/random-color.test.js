import { describe, it } from '@jest/globals';

import randomColor from '../random-color';

describe('random-color', () => {
  describe('Simple test', () => {
    it('should return a random hex color code', () => {
      const color = randomColor();

      expect(color).toMatch(/^#[0-9a-f]{6}$/i);
    });
  });
});
