import { describe, it } from '@jest/globals';

import { randomPerson } from '../index.js';
import randomPersonTwo from '../random-person.js';

describe('index', () => {
  describe('randomPerson', () => {
    it('should be the same function as randomPersonTwo', () => {
      expect(randomPerson).toBe(randomPersonTwo);
    });
  });
});
