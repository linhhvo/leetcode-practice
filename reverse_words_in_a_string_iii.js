/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const sArray = s.split(' ');

  newWord = sArray.map(word => {
    let temp = '';
    for (let i = word.length - 1; i >= 0; i--) {
      temp += word[i];
    }
    return temp;
  }).join(' ');
  return newWord;
};
