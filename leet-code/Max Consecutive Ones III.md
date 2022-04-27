# Max Consecutive Ones III

[LeetCode 문제 링크](https://leetcode.com/problems/max-consecutive-ones-iii)

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let remainFlip = k;
  let max = 0;
  let left = -1;
  let right = -1;

  while (right < nums.length) {
    right = findNextZero(nums, right);
    max = calcMax(max, left, right);

    if (remainFlip > 0) {
      remainFlip -= 1;
    } else {
      left = findNextZero(nums, left);
    }
  }

  return max;
};

function findNextZero(nums, cur) {
  for (let i = cur + 1; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      return i;
    }
  }

  return nums.length;
}

function calcMax(max, left, right) {
  return Math.max(max, right - left - 1);
}
```
