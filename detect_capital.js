/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return word === word.toUpperCase() || word.slice(1) === word.slice(1).toLowerCase() ? true : false;
};