/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let countMap = new Map();

  // Set key, value pair which keeps track the number of occurence of each character in the first string
  for (let char of s) {
    if (!countMap.has(char)) {
      countMap.set(char, 1);
    } else {
      let temp = countMap.get(char);
      countMap.set(char, temp += 1);
    }
  }

  // Iterate over each character in the second string
  // If the character is not a key in the countMap, it's a new letter so return false
  // If the char exists as a key, decrement the count value
  // If the count value reaches below 0, it's an extra letter, so return false
  for (let char of t) {
    if (!countMap.has(char)) {
      return false;
    } else {
      let temp = countMap.get(char);
      countMap.set(char, temp -= 1);
      if (countMap.get(char) < 0) return false;
    }
  }

  return true;
};