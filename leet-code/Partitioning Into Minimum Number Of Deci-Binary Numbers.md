# Partitioning Into Minimum Number Of Deci-Binary Numbers

[LeetCode 문제 링크](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers)

```javascript
function minPartitions(n: string): number {
  let maxChar = "0";
  for (const char of n) {
    if (char > maxChar) {
      maxChar = char;
    }
  }

  return Number(maxChar);
}
```
