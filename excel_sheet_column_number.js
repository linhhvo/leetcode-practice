/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  const initialNum = 64;
  let columnNum = 0;

  for (let index = s.length - 1, power = 0; index >= 0; index--, power++) {
    columnNum += (s.charCodeAt(index) - initialNum) * Math.pow(26, power);
  }

  return columnNum;
};