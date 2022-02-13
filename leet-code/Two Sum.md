# Two Sum

[LeetCode 문제 링크](https://leetcode.com/problems/two-sum)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) {
      return [i, map.get(nums[i])];
    } else {
      map.set(target - nums[i], i);
    }
  }
};
```
