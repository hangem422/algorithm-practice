# House Robber

[LeetCode 문제 링크](https://leetcode.com/problems/house-robber)

```typescript
function rob(nums: number[]): number {
  const dp = Array.from<number>({ length: nums.length + 1 }).fill(0);
  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }

  return dp[nums.length];
}
```
