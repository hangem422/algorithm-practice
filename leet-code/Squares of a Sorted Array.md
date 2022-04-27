# Squares of a Sorted Array

[LeetCode 문제 링크](https://leetcode.com/problems/squares-of-a-sorted-array)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const res = Array.from({ length: nums.length });
  let right = nums.length - 1;
  let left = 0;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      res[i] = nums[right] ** 2;
      right -= 1;
    } else {
      res[i] = nums[left] ** 2;
      left += 1;
    }
  }

  return res;
};
```
