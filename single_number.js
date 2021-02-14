/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let uniqueSet = new Set();

  // Iterate over each number in the given array
  for (let num of nums) {
    // If the number doesn't exist in the set, add it to the set
    // If the number is already in the set, delete it from the set
    if (!uniqueSet.has(num)) {
      uniqueSet.add(num);
    } else {
      uniqueSet.delete(num);
    }
  }

  for (let num of uniqueSet) return num;
};