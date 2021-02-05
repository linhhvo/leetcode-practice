/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const results = [];

  for (let num = left; num <= right; num++) {
    // Convert number to string
    const numString = num.toString();
    let divisible = true;
    // Loop through each digit
    for (let i = 0; i < numString.length; i++) {
      // If the digit is zero or not divisible
      if (numString[i] == 0 || num % parseInt(numString[i]) !== 0) {
        divisible = false;
        break;
      }
    }

    if (divisible) {
      results.push(num);
    }
  };

  return results;
};