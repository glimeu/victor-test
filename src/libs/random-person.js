import { randomColor, randomIntBetween, randomString } from '../utils';

/**
 * Person type definition.
 *
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 * @property {string} color
 */

/**
 * Generate a random person object.
 *
 * @returns {Person}
 */
function randomPerson() {
  const name = randomString();
  const age = randomIntBetween(18, 65);
  const color = randomColor();

  return { name, color, age };
}

export default randomPerson;
