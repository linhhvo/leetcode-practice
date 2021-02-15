/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let visited = new Set();
  let count = 0;

  // Iterate over the whole matrix
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      // Start from the root i
      // If there is a connection in i and j, and neither i nor j node has been visited
      // keep branching out to find all connected nodes
      if (isConnected[i][j] === 1 && !visited.has(i) && !visited.has(j)) {
        dfs(isConnected, i, visited);
        // increment count as the current root finishes branching out connections
        count++;
      }
    }
  }
  return count;
};

// dfs function to find connected nodes
const dfs = (matrix, curr, visited) => {
  // if the current root has already been visited, move on to next connection
  // if not yet visited, add to visited set and continue to branch out
  if (!visited.has(curr)) {
    visited.add(curr);

    for (let i = 0; i < matrix[curr].length; i++) {
      if (matrix[curr][i] === 1) {
        dfs(matrix, i, visited);
      }
    }
  }
};
