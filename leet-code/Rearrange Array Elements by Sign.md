# Rearrange Array Elements by Sign

[LeetCode 문제 링크](https://leetcode.com/problems/rearrange-array-elements-by-sign)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let res = Array(nums.length);
  let positiveIndex = 0;
  let negativeIndex = 1;

  nums.forEach((num) => {
    if (num >= 0) {
      res[positiveIndex] = num;
      positiveIndex += 2;
    } else {
      res[negativeIndex] = num;
      negativeIndex += 2;
    }
  });

  return res;
};
```
