# Minimum Penalty for a Shop

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-penalty-for-a-shop/description/?envType=daily-question&envId=2025-12-26)

```typescript
function bestClosingTime(customers: string): number {
  return findMinIndex(calcPenalties(Array.from(customers)));
}

function calcPenalties(chars: string[]): number[] {
  const totalY = chars.filter((c) => c === "Y").length;
  const penalties = [totalY];

  return chars.reduce<number[]>((acc, c) => {
    const delta = c === "Y" ? -1 : 1;
    const nextPenalty = acc[acc.length - 1] + delta;

    acc.push(nextPenalty);
    return acc;
  }, penalties);
}

function findMinIndex(arr: number[]): number {
  return arr.reduce(
    (minIndex, value, index, array) =>
      value < array[minIndex] ? index : minIndex,
    0
  );
}
```
