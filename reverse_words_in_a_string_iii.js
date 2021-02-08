/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Split given string into an array of words
  const sArray = s.split(' ');
  // Transform each word in the array then join all words back into a string
  newWord = sArray.map(word => {
    let temp = '';
    // Iterate over all characters in the word from the end and concat to the temporary string
    for (let i = word.length - 1; i >= 0; i--) {
      temp += word[i];
    }
    return temp;
  }).join(' ');
  return newWord;
};
