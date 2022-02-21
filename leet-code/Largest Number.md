# Largest Number

[LeetCode 문제 링크](https://leetcode.com/problems/largest-number)

```javascript
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const str = nums
    .map((num) => num.toString())
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join("");
  return str.startsWith("0") ? "0" : str;
};
```
