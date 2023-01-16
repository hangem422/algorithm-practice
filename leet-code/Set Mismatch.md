# Set Mismatch

[LeetCode 문제 링크](https://leetcode.com/problems/set-mismatch/description)

```typescript
function findErrorNums(nums: number[]): number[] {
  const flags = Array.from<boolean>({ length: nums.length + 1 });
  let duplicatedNum: number;

  for (const num of nums) {
    if (flags[num]) {
      duplicatedNum = num;
    } else {
      flags[num] = true;
    }
  }

  const missingNum = flags.indexOf(undefined, 1);
  return [duplicatedNum, missingNum];
}
```
