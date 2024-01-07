# 3Sum

[LeetCode 문제 링크](https://leetcode.com/problems/3sum)

```typescript
function threeSum(nums: number[]): Array<Array<number>> {
  const sorted = [...nums].sort((a, b) => a - b);
  const result: Array<Array<number>> = [];

  const isValidFirstIndex = (index: number) => {
    return index < sorted.length - 2 && sorted[index] <= 0;
  };

  const getNextIndex = (index: number) => {
    for (let i = index + 1; i < sorted.length; i += 1) {
      if (sorted[i] !== sorted[index]) {
        return i;
      }
    }
    return Infinity;
  };

  const getPreviousIndex = (index: number) => {
    for (let i = index - 1; i >= 0; i -= 1) {
      if (sorted[i] !== sorted[index]) {
        return i;
      }
    }
    return -1;
  };

  for (let i = 0; isValidFirstIndex(i); i = getNextIndex(i)) {
    let startIndex = i + 1;
    let endIndex = sorted.length - 1;

    while (startIndex < endIndex) {
      const sum = sorted[i] + sorted[startIndex] + sorted[endIndex];
      if (sum < 0) {
        startIndex = getNextIndex(startIndex);
      } else if (sum > 0) {
        endIndex = getPreviousIndex(endIndex);
      } else {
        result.push([sorted[i], sorted[startIndex], sorted[endIndex]]);
        startIndex = getNextIndex(startIndex);
        endIndex = getPreviousIndex(endIndex);
      }
    }
  }

  return result;
}
```
