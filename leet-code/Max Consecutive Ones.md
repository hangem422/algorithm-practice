# Max Consecutive Ones

[LeetCode 문제 링크](https://leetcode.com/problems/max-consecutive-ones)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let cur = 0;

  nums.forEach((num) => {
    if (num === 1) {
      cur += 1;
    } else {
      max = Math.max(max, cur);
      cur = 0;
    }
  });

  return Math.max(max, cur);
};
```
