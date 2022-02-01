# Ugly Number II

[LeetCode 문제 링크](https://leetcode.com/problems/ugly-number-ii)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = Array(n).fill(1, 0, 1);
  let index2 = 0;
  let index3 = 0;
  let index5 = 0;

  for (let i = 1; i < n; i += 1) {
    const num2 = dp[index2] * 2;
    const num3 = dp[index3] * 3;
    const num5 = dp[index5] * 5;
    dp[i] = Math.min(num2, num3, num5);

    if (num2 === dp[i]) {
      index2 += 1;
    }
    if (num3 === dp[i]) {
      index3 += 1;
    }
    if (num5 === dp[i]) {
      index5 += 1;
    }
  }

  return dp[n - 1];
};
```
