/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = 'aoeiu';
  let vowelsIndex = [];

  // Iterate over the characters in given string
  for (let i = 0; i < s.length; i++) {
    // If the character is a vowel, add the index to an array
    if (vowels.includes(s[i].toLowerCase())) {
      vowelsIndex.push(i);
    }
  }

  // Turn the given string to array
  let sArray = s.split('');

  // Iterate over the vowel index array
  // Use two-pointer to swap the vowels
  for (let i = 0, j = vowelsIndex.length - 1; i < j; i++, j--) {
    let temp = sArray[vowelsIndex[i]];
    sArray[vowelsIndex[i]] = sArray[vowelsIndex[j]];
    sArray[vowelsIndex[j]] = temp;
  }

  return sArray.join('');
};