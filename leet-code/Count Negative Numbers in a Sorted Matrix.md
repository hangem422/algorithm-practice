# Count Negative Numbers in a Sorted Matrix

[LeetCode 문제 링크](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix)

```typescript
function countNegatives(grid: number[][]): number {
  return grid.flat().filter((num) => num < 0).length;
}
```
