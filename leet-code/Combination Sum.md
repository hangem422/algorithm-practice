# Combination Sum

[LeetCode 문제 링크](https://leetcode.com/problems/combination-sum)

```typescript
type Result = Array<Array<number>>;

function combinationSum(
  candidates: number[],
  target: number,
  acc: Array<number> = [],
  lastCandidateIndex: number = 0
): Result {
  const total = sum(acc);

  if (total > target) {
    return [];
  }
  if (total === target) {
    return [[...acc]];
  }

  return candidates.slice(lastCandidateIndex).reduce((result, candidate, index) => {
    const nextNums = acc.concat(candidate);
    const nextIndex = lastCandidateIndex + index;
    const partialResult = combinationSum(candidates, target, nextNums, nextIndex);
    result.push(...partialResult);

    return result;
  }, [] as Result);
}

function sum(nums: Array<number>): number {
  return nums.reduce((acc, num) => acc + num, 0);
}
```
