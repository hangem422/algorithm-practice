# Partition Array According to Given Pivot

[LeetCode 문제 링크](https://leetcode.com/problems/partition-array-according-to-given-pivot)

```javascript
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const less = [];
  const same = [];
  const greater = [];

  nums.forEach((num) => {
    if (num < pivot) {
      less.push(num);
    } else if (num === pivot) {
      same.push(num);
    } else {
      greater.push(num);
    }
  });

  return [...less, ...same, ...greater];
};
```
