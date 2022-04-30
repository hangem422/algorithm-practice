# 3Sum Closest

[LeetCode 문제 링크](https://leetcode.com/problems/3sum-closest)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let minDiff = Infinity;

  for (let i = 0; minDiff !== 0 && i < nums.length - 2; i += 1) {
    const curTarget = target - nums[i];
    minDiff = getMinCloset(nums, i + 1, nums.length - 1, minDiff, curTarget);
  }

  return target - minDiff;
};

function getMinCloset(nums, _left, _right, _minDiff, target) {
  let left = _left;
  let right = _right;
  let minDiff = _minDiff;

  while (minDiff !== 0 && left < right) {
    const cur = target - nums[left] - nums[right];
    minDiff = getMinDiff(minDiff, cur);

    if (cur < 0) {
      right -= 1;
    } else if (cur > 0) {
      left += 1;
    }
  }

  return minDiff;
}

function getMinDiff(a, b) {
  return Math.abs(a) > Math.abs(b) ? b : a;
}
```
