# Longest Increasing Subsequence

[LeetCode 문제 링크](https://leetcode.com/problems/longest-increasing-subsequence)

```typescript
function lengthOfLIS(nums: number[]): number {
  const stack: number[] = [-Infinity];
  nums.forEach((num) => {
    if (num > stack[stack.length - 1]) {
      stack.push(num);
    } else {
      const index = stack.findIndex((numOfStack) => numOfStack >= num);
      stack[index] = num;
    }
  });

  return stack.length - 1;
}
```
