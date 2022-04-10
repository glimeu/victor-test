/**
 * Generates a random hex color code and returns it.
 *
 * @returns {string}
 */
function randomColor() {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}



export default randomColor;
