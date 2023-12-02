# Find Triangular Sum of an Array

[LeetCode 문제 링크](https://leetcode.com/problems/find-triangular-sum-of-an-array)

```typescript
function triangularSum(_nums: number[]): number {
  const nums = [..._nums];

  for (let except = 1; except < nums.length; except += 1) {
    for (let i = 0; i < nums.length - except; i += 1) {
      nums[i] = sum(nums[i], nums[i + 1]);
    }
  }

  return nums[0];
}

function sum(num1: number, num2: number): number {
  return (num1 + num2) % 10;
}
```
