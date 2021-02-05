/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const lastIndex = digits.length - 1;
  // Loop through the array from the last digit
  for (let i = lastIndex; i >= 0; i--) {
    // If the digit is 9, replace with 0
    if (digits[i] === 9) {
      digits[i] = 0;
    }
    // if the digit is not 9, increment by 1
    // and return the modified array
    else {
      digits[i]++;
      return digits;
    }
  }
  // If the loop is done without return
  // meaning all digits were 9s and were replaced with 0s
  // add 1 to the begging of the array
  digits.unshift(1);

  return digits;
};
