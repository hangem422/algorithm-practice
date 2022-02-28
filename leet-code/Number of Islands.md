# Number of Islands

[LeetCode 문제 링크](https://leetcode.com/problems/number-of-islands)

```javascript
const ROW_DIR = [-1, 0, 1, 0];
const COL_DIR = [0, 1, 0, -1];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  grid.forEach((arr, row) =>
    arr.forEach((val, col) => {
      if (val === "1") {
        count += 1;
        visitIsland(grid, row, col);
      }
    })
  );

  return count;
};

function visitIsland(grid, row, col) {
  const stack = [[row, col]];
  grid[row][col] = "0";

  while (stack.length) {
    const [curRow, curCol] = stack.pop();
    for (let i = 0; i < 4; i += 1) {
      const nextRow = curRow + ROW_DIR[i];
      const nextCol = curCol + COL_DIR[i];

      if (nextRow < 0 || nextRow === grid.length) {
        continue;
      }
      if (nextCol < 0 || nextCol === grid[0].length) {
        continue;
      }
      if (grid[nextRow][nextCol] !== "1") {
        continue;
      }

      stack.push([nextRow, nextCol]);
      grid[nextRow][nextCol] = "0";
    }
  }
}
```
