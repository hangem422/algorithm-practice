# Minimum Subsequence in Non-Increasing Order

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  const acc = getAccListOfNums(nums);
  const index = searchSubsequenceIndex(acc);
  return nums.slice(0, index + 1);
};

function getAccListOfNums(nums) {
  const acc = Array(nums.length);
  acc[0] = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    acc[i] = acc[i - 1] + nums[i];
  }

  return acc;
}

function searchSubsequenceIndex(acc) {
  const max = acc[acc.length - 1];
  let left = 0;
  let right = acc.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (acc[mid] * 2 > max) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return left;
}
```
