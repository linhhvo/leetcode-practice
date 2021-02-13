/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const comp = {};

  // Iterate over all numbers in the given array
  for (let i = 0; i < nums.length; i++) {
    // If the current element exists as a key in the object
    // The value of the object key and the current element's index are the indices needed
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }

    // If the object entry has not been created yet, 
    // Store the the complement number as an object key with value being the current element's index
    comp[target - nums[i]] = i;
  }
};