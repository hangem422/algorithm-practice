# Get Maximum in Generated Array

[LeetCode 문제 링크](https://leetcode.com/problems/get-maximum-in-generated-array/description)

```typescript
function getMaximumGenerated(n: number): number {
  if (n === 0) {
    return 0;
  }

  const nums = Array.from<number>({ length: n + 1 });
  nums[0] = 0;
  nums[1] = 1;

  const limit = Math.floor(n / 2);
  for (let i = 1; i <= limit; i += 1) {
    nums[i * 2] = nums[i];
    nums[i * 2 + 1] = nums[i] + nums[i + 1];
  }

  return Math.max(...nums.slice(0, n + 1));
}
```
