/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  A.forEach(child => {
    child.reverse();

    for (let i = 0; i < child.length; i++) {
      child[i] = child[i] === 0 ? 1 : 0;
    }
  });
  return A;
};
