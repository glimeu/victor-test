import { describe, it } from '@jest/globals';

import randomString from '../random-string.js';

describe('random-string', () => {
  describe('Simple test', () => {
    it('should return a random string', () => {
      const string = randomString();

      expect(string).toMatch(/^[0-9a-f]{20}$/i);
    });
  });
});
