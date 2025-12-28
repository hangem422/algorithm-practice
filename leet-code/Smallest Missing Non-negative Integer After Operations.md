# Smallest Missing Non-negative Integer After Operations

[LeetCode 문제 링크](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations)

```typescript
function findSmallestInteger(nums: number[], value: number): number {
  const { count, index } = nums
    .map((num) => mod(num, value))
    .reduce((counts, num) => {
      counts[num] += 1;
      return counts;
    }, Array.from<number>({ length: value }).fill(0))
    .reduce(
      (acc, count, index) => {
        return count < acc.count ? { count, index } : acc;
      },
      { count: Infinity, index: Infinity }
    );

  return value * count + index;
}

function mod(num: number, value: number): number {
  return ((num % value) + value) % value;
}
```
