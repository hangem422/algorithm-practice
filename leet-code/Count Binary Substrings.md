# Count Binary Substrings

[LeetCode 문제 링크](https://leetcode.com/problems/count-binary-substrings)

```typescript
function countBinarySubstrings(s: string): number {
  let res: number = 0;
  const diffCoupleIndexList = findIndexesOfDiffCouple(s);
  diffCoupleIndexList.forEach((index) => {
    res += getCountOfExpand(s, index);
  });

  return res;
}

function findIndexesOfDiffCouple(s: string): number[] {
  const indexs: number[] = [];
  for (let i = 0; i < s.length - 1; i += 1) {
    if (s[i] !== s[i + 1]) {
      indexs.push(i);
    }
  }

  return indexs;
}

function getCountOfExpand(s: string, index: number): number {
  let left = index;
  let right = index + 1;
  let count = 0;

  while (isValidToEnpand(s, index, count)) {
    left -= 1;
    right += 1;
    count += 1;
  }

  return count;
}

function isValidToEnpand(s: string, index: number, count: number): boolean {
  const leftIndex = index - count;
  const rightIndex = index + count + 1;
  return leftIndex >= 0 && rightIndex < s.length && s[leftIndex] === s[index] && s[rightIndex] === s[index + 1];
}
```
