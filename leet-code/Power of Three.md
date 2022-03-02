# Power of Three

[LeetCode 문제 링크](https://leetcode.com/problems/power-of-three)

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n > 1) {
    if (n % 3 !== 0) {
      return false;
    }
    n /= 3;
  }

  return n === 1;
};
```
