# Ugly Number

[LeetCode 문제 링크](https://leetcode.com/problems/ugly-number)

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  n = delelteFactorizationNum(n, 2);
  n = delelteFactorizationNum(n, 3);
  n = delelteFactorizationNum(n, 5);
  return n === 1;
};

function delelteFactorizationNum(num, target) {
  while (num && num % target === 0) {
    num /= target;
  }
  return num;
}
```
