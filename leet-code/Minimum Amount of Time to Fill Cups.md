# Minimum Amount of Time to Fill Cups

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups)

```typescript
function fillCups(amount: number[]): number {
  const [min, mid, max] = [...amount].sort((a, b) => a - b);
  return max + Math.ceil(Math.max(min + min - (max - (mid - min)), 0) / 2);
}
```
