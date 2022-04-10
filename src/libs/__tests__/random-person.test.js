import { describe, it } from '@jest/globals';

import randomPerson from '../random-person';

describe('random-person', () => {
  describe('Simple test', () => {
    it('should return a random person', () => {
      const person = randomPerson();

      expect(person).toMatchObject({
        name: expect.any(String),
        age: expect.any(Number),
        color: expect.any(String),
      });
    });
  });
});
