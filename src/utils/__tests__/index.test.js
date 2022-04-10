import { describe, it } from '@jest/globals';

import { randomColor, randomIntBetween, randomString } from '../index.js';
import randomColorTwo from '../random-color.js';
import randomIntBetweenTwo from '../random-int-between.js';
import randomStringTwo from '../random-string.js';

describe('index', () => {
  describe('randomColor', () => {
    it('should be the same function as randomColorTwo', () => {
      expect(randomColor).toBe(randomColorTwo);
    });
  });

  describe('randomIntBetween', () => {
    it('should be the same function as randomIntBetweenTwo', () => {
      expect(randomIntBetween).toBe(randomIntBetweenTwo);
    });
  });

  describe('randomString', () => {
    it('should be the same function as randomStringTwo', () => {
      expect(randomString).toBe(randomStringTwo);
    });
  });
});
