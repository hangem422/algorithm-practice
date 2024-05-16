# Array Partition

[LeetCode 문제 링크](https://leetcode.com/problems/array-partition)

```typescript
function arrayPairSum(nums: number[]): number {
  const sorted = [...nums].sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sorted.length; i += 2) {
    result += sorted[i];
  }

  return result;
}
```
