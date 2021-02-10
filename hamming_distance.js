/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // Use XOR to turn all different bits into 1
  let diff = x ^ y;
  // Convert to array
  let diffArr = diff.toString(2).split('');
  // Return the number of '1's in the array
  return diffArr.filter(bit => bit == 1).length;
};