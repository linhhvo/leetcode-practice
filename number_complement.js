/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // // Convert given number to binary string
  // const binaryNum = num.toString(2);

  // let temp = '';

  // // Iterate over the string and convert 0 to 1 and 1 to 0
  // for (let i = 0; i < binaryNum.length; i++) {
  //   temp += binaryNum[i] === '0' ? '1' : '0';
  // }

  // // Convert the binary string back to number
  let result = '';
  for (let i = num; i > 0; i >>= 1) {
    console.log('i is ', i);
    result += i ^ 1;
    console.log('i^1 is ', i ^ 1);
    console.log('result is ', result);
  }
  return parseInt(result, 2);
};

findComplement(5);