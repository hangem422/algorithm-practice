# Unique Binary Search Trees

[LeetCode 문제 링크](https://leetcode.com/problems/unique-binary-search-trees)

```typescript
function numTrees(n: number): number {
  const dp = Array.from < number > { length: n + 1 }.fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let target = 2; target <= n; target += 1) {
    for (let root = 1; root <= target; root += 1) {
      dp[target] += dp[root - 1] * dp[target - root];
    }
  }

  return dp[n];
}
```
