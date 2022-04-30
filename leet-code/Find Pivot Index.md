# Find Pivot Index

[LeetCode 문제 링크](https://leetcode.com/problems/find-pivot-index)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = calcTotal(nums);
  let left = 0;

  for (let i = 0; i < nums.length; i += 1) {
    total -= nums[i];
    if (left === total) {
      return i;
    }

    left += nums[i];
  }

  return -1;
};

function calcTotal(nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
```
