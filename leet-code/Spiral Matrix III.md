# Spiral Matrix III

[LeetCode 문제 링크](https://leetcode.com/problems/spiral-matrix-iii)

```typescript
type Position = [row: number, col: number];

const ROW_DIRECTION = [0, 1, 0, -1];
const COL_DIRECTION = [1, 0, -1, 0];

function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): Array<Position> {
  let count = 0;
  let currentPosition: Position = [rStart, cStart];

  const path: Array<Position> = [currentPosition];

  while (!isDone(path, rows, cols)) {
    const length = Math.floor(count / 2) + 1;
    const directionIndex = count % 4;

    const rowDirection = ROW_DIRECTION[directionIndex];
    const colDirecrion = COL_DIRECTION[directionIndex];

    const startPosition = currentPosition;

    for (let i = 0; i < length; i += 1) {
      const nextRow = currentPosition[0] + rowDirection;
      const nextCol = currentPosition[1] + colDirecrion;
      currentPosition = [nextRow, nextCol];

      if (validate(currentPosition, rows, cols)) {
        path.push(currentPosition);
      }
    }

    count += 1;
  }

  return path;
}

function isDone(path: Array<Position>, rowSize: number, colSize: number): boolean {
  return path.length === rowSize * colSize;
}

function validate(position: Position, rowSize: number, colSize: number): boolean {
  return position[0] >= 0 && position[0] < rowSize && position[1] >= 0 && position[1] < colSize;
}
```
