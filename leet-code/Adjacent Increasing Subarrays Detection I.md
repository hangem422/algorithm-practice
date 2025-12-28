# Adjacent Increasing Subarrays Detection I

[LeetCode 문제 링크](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i)

```typescript
function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  for (let i = 0; i <= nums.length - k * 2; i += 1) {
    if (isSubarrays(nums, k, i) && isSubarrays(nums, k, i + k)) {
      return true;
    }
  }

  return false;
}

function isSubarrays(nums: number[], k: number, start: number): boolean {
  for (let i = start; i < start + k - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      return false;
    }
  }

  return true;
}
```
