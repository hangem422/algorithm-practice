# Surrounded Regions

[LeetCode 문제 링크](https://leetcode.com/problems/surrounded-regions)

## 모든 노드를 수정하는 방법

```javascript
const ROW_DIR = [-1, 0, 1, 0];
const COL_DIR = [0, 1, 0, -1];

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rowMax = board.length - 1;
  const colMax = board[0].length - 1;

  paintNotSurroundedOToZ(board, rowMax, colMax);
  paintZToO(board, rowMax, colMax);
};

function paintNotSurroundedOToZ(board, rowMax, colMax) {
  for (let row = 0; row <= rowMax; row += 1) {
    paintOToZ(board, row, 0);
    paintOToZ(board, row, colMax);
  }

  for (let col = 0; col <= colMax; col += 1) {
    paintOToZ(board, 0, col);
    paintOToZ(board, rowMax, col);
  }
}

function paintOToZ(board, row, col) {
  if (board[row][col] !== "O") {
    return;
  }

  const stack = [[row, col]];
  board[row][col] = "Z";

  while (stack.length) {
    const [curRow, curCol] = stack.pop();
    for (let i = 0; i < 4; i += 1) {
      const nextRow = curRow + ROW_DIR[i];
      const nextCol = curCol + COL_DIR[i];

      if (nextRow < 0 || nextRow === board.length) {
        continue;
      }
      if (nextCol < 0 || nextCol === board[0].length) {
        continue;
      }
      if (board[nextRow][nextCol] !== "O") {
        continue;
      }

      stack.push([nextRow, nextCol]);
      board[nextRow][nextCol] = "Z";
    }
  }
}

function paintZToO(board, rowMax, colMax) {
  for (let row = 0; row <= rowMax; row += 1) {
    for (let col = 0; col <= colMax; col += 1) {
      if (board[row][col] === "Z") {
        board[row][col] = "O";
      } else {
        board[row][col] = "X";
      }
    }
  }
}
```
