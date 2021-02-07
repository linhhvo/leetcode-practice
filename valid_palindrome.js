/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sArray = [];

  for (let i = 0; i < s.length; i++) {
    // Get ASCII code for character
    let char = s.toLowerCase().charCodeAt(i);
    // Add to array if character is alphanumeric based on ASCII code
    if ((char >= 97 && char <= 122) || (char >= 48 && char <= 57)) {
      sArray.push(s[i].toLowerCase());
    }
  }

  return sArray.join('') === sArray.reverse().join('') ? true : false;
};