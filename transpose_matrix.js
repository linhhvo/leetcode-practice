/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  // Initiate the output array
  const B = [];
  // Iterate over the length of child array
  for (let i = 0; i < A[0].length; i++) {
    // Initial a child array for output array
    const child = [];
    // Iterate over the length of parent array
    for (let j = 0; j < A.length; j++) {
      // Add the element to the child array
      child.push(A[j][i]);
    }
    // Add child array to the output array
    B.push(child);
  }
  return B;
};