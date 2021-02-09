/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }

  // Initialize the common prefix as the first string
  let commonPrefix = strs[0];

  // Iterate over each string in the array starting from strs[1]
  for (let i = 1; i < strs.length; i++) {
    // Iterate over each character of the string
    for (let j = 0; j < commonPrefix.length; j++) {
      // Compare with each character of the common prefix
      // If characters are not common
      if (commonPrefix[j] !== strs[i][j]) {
        // If the first character is different, common prefix is empty
        // Only keep the part of the string up to that character
        commonPrefix = j === 0 ? '' : commonPrefix.slice(0, j);
      }
    }
  }

  return commonPrefix;
};
