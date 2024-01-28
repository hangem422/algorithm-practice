# Permutations II

[LeetCode 문제 링크](https://leetcode.com/problems/permutations-ii)

```typescript
function permuteUnique(nums: Array<number>, excludedIndexes: Set<number> = new Set()): Array<Array<number>> {
  const usedNumber = new Set<number>();

  return nums.reduce((acc, num, index) => {
    if (usedNumber.has(num) || excludedIndexes.has(index)) {
      return acc;
    }

    usedNumber.add(num);
    excludedIndexes.add(index);

    if (excludedIndexes.size === nums.length) {
      acc.push([num]);
    } else {
      const childs = permuteUnique(nums, excludedIndexes);
      acc.push(...childs.map((child) => [num, ...child]));
    }

    excludedIndexes.delete(index);
    return acc;
  }, [] as Array<Array<number>>);
}
```

```typescript
type NumCounts = Map<number, number>;

function permuteUnique(nums: Array<number>): Array<Array<number>> {
  const stack: Array<number> = [];
  const result: Array<Array<number>> = [];
  const numCounts = getNumCounts(nums);

  const backtracking = () => {
    if (stack.length === nums.length) {
      result.push([...stack]);
      return;
    }

    for (const [num, count] of numCounts) {
      if (count < 1) {
        continue;
      }

      stack.push(num);
      numCounts.set(num, getNumCount(numCounts, num) - 1);
      backtracking();
      stack.pop();
      numCounts.set(num, getNumCount(numCounts, num) + 1);
    }
  };

  backtracking();
  return result;
}

const getNumCounts = (nums: Array<number>): NumCounts =>
  nums.reduce((numCounts, num) => {
    numCounts.set(num, getNumCount(numCounts, num) + 1);
    return numCounts;
  }, new Map<number, number>());

const getNumCount = (numCounts: NumCounts, num): number => {
  return numCounts.get(num) ?? 0;
};
```
