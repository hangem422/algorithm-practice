# Count Sub Islands

[LeetCode 문제 링크](https://leetcode.com/problems/count-sub-islands)

```javascript
const ROW_DIR = [-1, 0, 1, 0];
const COL_DIR = [0, 1, 0, -1];

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let count = 0;

  grid2.forEach((arr, row) =>
    arr.forEach((val, col) => {
      if (val === 1 && isSubIsland(grid1, grid2, row, col)) {
        count += 1;
      }
    })
  );

  return count;
};

function isSubIsland(grid1, grid2, row, col) {
  const stack = [[row, col]];
  const rowSize = grid1.length;
  const colSize = grid1[0].length;

  let result = true;
  grid2[row][col] === 0;

  while (stack.length) {
    const [curRow, curCol] = stack.pop();
    if (result) {
      result = grid1[curRow][curCol] === 1;
    }

    for (let i = 0; i < 4; i += 1) {
      const nextRow = curRow + ROW_DIR[i];
      const nextCol = curCol + COL_DIR[i];

      if (nextRow < 0 || nextRow >= rowSize) {
        continue;
      }
      if (nextCol < 0 || nextCol >= colSize) {
        continue;
      }
      if (grid2[nextRow][nextCol] !== 1) {
        continue;
      }

      grid2[nextRow][nextCol] = 0;
      stack.push([nextRow, nextCol]);
    }
  }

  return result;
}
```
