/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  const B = [];

  for (let i = 0; i < A[0].length; i++) {
    const child = [];
    for (let j = 0; j < A.length; j++) {
      child.push(A[j][i]);
    }
    B.push(child);
  }
  return B;
};