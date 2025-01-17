/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // Approach 1 - use existing reverse method
  // s.reverse();

  // Approach 2 - use two-pointer 
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
};