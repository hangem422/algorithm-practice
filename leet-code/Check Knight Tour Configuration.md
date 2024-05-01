# Check Knight Tour Configuration

[LeetCode 문제 링크](https://leetcode.com/problems/check-knight-tour-configuration)

```typescript
type Grid = Array<Array<number>>;
type Position = [row: number, col: number];
type PositionMap = Map<number, Position>;

function checkValidGrid(grid: Grid): boolean {
  const cellCount = getCellCount(grid);
  const positionMap = getPositionMap(grid);

  for (let i = 0; i < cellCount; i += 1) {
    const from = positionMap.get(i - 1)!;
    const to = positionMap.get(i)!;
    if (!validateMove(from, to)) {
      return false;
    }
  }

  return true;
}

function getCellCount(grid: Grid): number {
  return grid.length * grid[0].length;
}

function getPositionMap(grid: Grid): PositionMap {
  const positionMap: PositionMap = new Map();
  positionMap.set(-1, [-1, -2]);

  grid.forEach((rows, row) => {
    rows.forEach((index, col) => {
      positionMap.set(index, [row, col]);
    });
  });

  return positionMap;
}

function validateMove(from: Position, to: Position): boolean {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;

  const rowdiff = Math.abs(fromRow - toRow);
  const colDiff = Math.abs(fromCol - toCol);

  return (rowdiff === 2 && colDiff === 1) || (rowdiff === 1 && colDiff === 2);
}
```
