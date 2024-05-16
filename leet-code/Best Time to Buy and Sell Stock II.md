# Best Time to Buy and Sell Stock II

[LeetCode 문제 링크](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)

```typescript
function maxProfit(prices: number[]): number {
  let result = 0;

  for (let i = 1; i < prices.length; i += 1) {
    const diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      result += diff;
    }
  }

  return result;
}
```
