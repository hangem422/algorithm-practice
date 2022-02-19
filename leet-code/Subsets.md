# Subsets

[LeetCode 문제 링크](https://leetcode.com/problems/subsets)

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const subsets = [[]];
  nums.forEach((num) => {
    const includeList = subsets.map((subset) => subset.concat(num));
    subsets.push(...includeList);
  });
  return subsets;
};
```
