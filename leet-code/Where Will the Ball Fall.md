# Surrounded Regions

[LeetCode 문제 링크](https://leetcode.com/problems/where-will-the-ball-fall)

```javascript
const STUCK = -1;

const FROM_RIGHT = 0;
const FROM_TOP = 1;
const FROM_LEFT = 2;

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const rowSize = grid.length;
  const colSize = grid[0].length;
  const cache = Array.from({ length: rowSize }, () => Array.from({ length: colSize }, () => Array(3)));
  return Array.from({ length: colSize }, (_, i) => isValidToOutBottom(0, i, FROM_TOP, grid, cache));
};

function isValidToOutBottom(row, col, from, grid, cache) {
  if (isFinished(row, grid)) {
    return col;
  }

  if (isInvalidColumnPlacement(col, grid)) {
    return STUCK;
  }

  if (cache[row][col][from] === undefined) {
    if (grid[row][col] === 1) {
      if (from === FROM_RIGHT) {
        return STUCK;
      } else if (from === FROM_TOP) {
        cache[row][col][from] = isValidToOutBottom(row, col + 1, FROM_LEFT, grid, cache);
      } else {
        cache[row][col][from] = isValidToOutBottom(row + 1, col, FROM_TOP, grid, cache);
      }
    } else {
      if (from === FROM_RIGHT) {
        cache[row][col][from] = isValidToOutBottom(row + 1, col, FROM_TOP, grid, cache);
      } else if (from === FROM_TOP) {
        cache[row][col][from] = isValidToOutBottom(row, col - 1, FROM_RIGHT, grid, cache);
      } else {
        return STUCK;
      }
    }
  }

  return cache[row][col][from];
}

function isFinished(row, grid) {
  return row >= grid.length;
}

function isInvalidColumnPlacement(col, grid) {
  return col >= grid[0].length || col < 0;
}
```
