import { describe, it } from '@jest/globals';

import randomIntBetween from '../random-int-between.js';

describe('random-int-between', () => {
  describe('Simple test', () => {
    it('should return a random integer between the given min and max', () => {
      const min = 1;
      const max = 10;
      const randomInt = randomIntBetween(min, max);
      expect(randomInt).toBeGreaterThanOrEqual(min);
      expect(randomInt).toBeLessThanOrEqual(max);
    });
  });

  describe('Random tests', () => {
    it('should return a random integer between the given random min and random max', () => {
      for (let i = 0; i < 100; i++) {
        const min = Math.floor(Math.random() * 100);
        const max = Math.floor(Math.random() * 100);
        const randomInt = randomIntBetween(min, max);
        expect(randomInt).toBeGreaterThanOrEqual(Math.min(min, max));
        expect(randomInt).toBeLessThanOrEqual(Math.max(min, max));
      }
    });
  });
});
