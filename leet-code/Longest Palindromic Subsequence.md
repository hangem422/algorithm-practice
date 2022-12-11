# Longest Palindromic Subsequence

[LeetCode 문제 링크](https://leetcode.com/problems/max-consecutive-ones-iii)

```typescript
function longestPalindromeSubseq(s: string): number {
  const size = s.length;
  const dp = Array.from({ length: size }, () => Array.from<number>({ length: size }).fill(0));

  for (let i = 0; i < size; i += 1) {
    dp[i][i] = 1;
  }

  for (let range = 2; range <= size; range += 1) {
    for (let start = 0, end = start + range - 1; end < size; start += 1, end += 1) {
      if (s[start] === s[end]) {
        dp[start][end] = dp[start + 1][end - 1] + 2;
      } else {
        dp[start][end] = Math.max(dp[start][end - 1], dp[start + 1][end]);
      }
    }
  }

  return dp[0][size - 1];
}
```
