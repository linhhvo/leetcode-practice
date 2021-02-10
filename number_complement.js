/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // Convert given number to binary string
  const binaryNum = num.toString(2);

  let result = '';

  // Iterate over the string and convert 0 to 1 and 1 to 0
  for (let i = 0; i < binaryNum.length; i++) {
    result += binaryNum[i] === '0' ? '1' : '0';
  }

  // Convert the binary string back to number
  return parseInt(result, 2);
};