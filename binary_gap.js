/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let result = 0;
  let lastIndex = null; // store index of the last found bit 1

  // Iterate over each bit of the given number
  // Keep track of current index
  for (let i = n, curIndex = 0; i > 0; i >>= 1, curIndex++) {
    if (i & 1) {
      // If last found index is valid, calculate the distance between indices
      if (lastIndex !== null) {
        let temp = curIndex - lastIndex;
        // If current distance is bigger than previous distance, replace the result
        result = temp > result ? temp : result;
      }
      // Current index of bit 1 becomes the last found bit 1
      lastIndex = curIndex;
    }
  }
  return result;
};
