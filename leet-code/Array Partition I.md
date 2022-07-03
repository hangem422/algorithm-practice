# Array Partition I

[LeetCode 문제 링크](https://leetcode.com/problems/array-partition-i)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < nums.length; i += 2) {
    res += nums[i];
  }
  return res;
};
```
