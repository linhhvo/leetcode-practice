/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let count = {};

  // Iterate over each number in the array
  for (let num of nums) {
    // If the number is not already a key in the count object, create the key and assign value 1 for the count
    // If it's already a key in the object, increment the count value
    count[num] = count[num] ? count[num] += 1 : 1;
  }

  // From an array of the count object keys, return the key that has count value of 1
  return Object.keys(count).find(key => count[key] === 1);
};

