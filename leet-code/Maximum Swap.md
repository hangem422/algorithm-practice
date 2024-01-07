# Maximum Swap

[LeetCode 문제 링크](https://leetcode.com/problems/maximum-swap)

```typescript
function maximumSwap(num: number): number {
  const arr = num.toString().split("");
  const sorted = [...arr].sort().reverse();

  const indexA = arr.findIndex((char, index) => char !== sorted[index]);
  const indexB = arr.lastIndexOf(sorted[indexA]);

  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;

  return Number(arr.join(""));
}
```
