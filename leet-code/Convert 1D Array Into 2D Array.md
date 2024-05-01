# Convert 1D Array Into 2D Array

[LeetCode 문제 링크](https://leetcode.com/problems/convert-1d-array-into-2d-array)

```typescript
function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (m * n !== original.length) {
    return [];
  }

  return Array.from({ length: m }, (_, row) =>
    Array.from({ length: n }, (_, col) => {
      const originalIndex = n * row + col;
      return original[originalIndex];
    })
  );
}
```
