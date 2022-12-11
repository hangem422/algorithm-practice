# Coin Change II

[LeetCode 문제 링크](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal)

```typescript
function change(amount: number, coins: number[]): number {
  const dp = Array.from<number>({ length: amount + 1 }).fill(0);
  dp[0] = 1;

  coins.forEach((coin) => {
    for (let i = coin; i <= amount; i += 1) {
      dp[i] += dp[i - coin];
    }
  });

  return dp[amount];
}
```
