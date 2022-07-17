# Best Time to Buy and Sell Stock with Transaction Fee

[LeetCode 문제 링크](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee)

```javascript
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const size = prices.length;
  const entryStateList = generateStateList(size + 1, -prices[0]);
  const exitStateList = generateStateList(size + 1, 0);

  for (let i = 1; i < size; i += 1) {
    const prevIndex = i - 1;
    entryStateList[i] = Math.max(entryStateList[prevIndex], exitStateList[prevIndex] - prices[i]);
    exitStateList[i] = Math.max(exitStateList[prevIndex], entryStateList[prevIndex] + prices[i] - fee);
  }

  return Math.max(entryStateList[size - 1], exitStateList[size - 1]);
};

function generateStateList(length, init) {
  const stateList = Array(length);
  stateList[0] = init;
  return stateList;
}
```
