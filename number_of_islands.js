/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

  let visited = new Set();
  let count = 0;

  // Iterate over each grid position and branch out to check adjacent island or water with dfs
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1' && !visited.has(`${i}-${j}`)) {
        dfs(grid, i, j, visited);
        count++;
      }
    }
  }

  return count;
};

const dfs = (map, row, col, visited) => {
  if (!visited.has(`${row}-${col}`)) {
    visited.add(`${row}-${col}`);

    if (row >= map.length || row < 0) return;

    // Check surrounding elements to determine whether there are lands or water around 
    if (map[row][col] === '1') {
      let prevCol = col - 1;
      dfs(map, row, prevCol, visited);

      let nextCol = col + 1;
      dfs(map, row, nextCol, visited);

      let prevRow = row - 1;
      dfs(map, prevRow, col, visited);

      let nextRow = row + 1;
      dfs(map, nextRow, col, visited);

    }
  }
};