import crypto from 'crypto';

/**
 * Generates a random string.
 *
 * @returns {string}
 */
function randomString() {
  return crypto.randomBytes(10).toString('hex');
}

export default randomString;
