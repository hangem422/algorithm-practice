# Word Search

[LeetCode 문제 링크](https://leetcode.com/problems/word-search)

```typescript
function exist(board: string[][], word: string): boolean {
  const rowSize = board.length;
  const colSize = board[0].length;
  const visited = Array.from({ length: rowSize }, () => Array.from < boolean > { length: colSize }.fill(false));

  const firstWord = word.charAt(0);

  for (let row = 0; row < rowSize; row += 1) {
    for (let col = 0; col < colSize; col += 1) {
      if (board[row][col] !== firstWord) {
        continue;
      }

      visited[row][col] = true;
      const result = searchBacktracking(row, col, board, word, 1, visited);
      visited[row][col] = false;

      if (result) {
        return true;
      }
    }
  }

  return false;
}

const ROW_DIR = [-1, 0, 1, 0];
const COL_DIR = [0, 1, 0, -1];

function searchBacktracking(
  row: number,
  col: number,
  board: string[][],
  word: string,
  startIndex: number,
  visited: boolean[][]
): boolean {
  if (startIndex === word.length) {
    return true;
  }

  const maxRow = board.length - 1;
  const maxCol = board[0].length - 1;

  for (let i = 0; i < 4; i += 1) {
    const nextRow = row + ROW_DIR[i];
    if (nextRow < 0 || nextRow > maxRow) {
      continue;
    }

    const nextCol = col + COL_DIR[i];
    if (nextCol < 0 || nextCol > maxCol) {
      continue;
    }

    if (visited[nextRow][nextCol]) {
      continue;
    }
    if (board[nextRow][nextCol] !== word[startIndex]) {
      continue;
    }

    visited[nextRow][nextCol] = true;
    const result = searchBacktracking(nextRow, nextCol, board, word, startIndex + 1, visited);
    visited[nextRow][nextCol] = false;

    if (result) {
      return true;
    }
  }

  return false;
}
```
