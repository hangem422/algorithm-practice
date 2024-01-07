# Minimum Operations to Make the Array Increasing

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing)

```typescript
function minOperations(nums: number[]): number {
  let max = nums[0];
  let count = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] <= max) {
      max += 1;
      count += max - nums[i];
    } else {
      max = nums[i];
    }
  }

  return count;
}
```
