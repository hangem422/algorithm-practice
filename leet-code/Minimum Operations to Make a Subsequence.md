# Minimum Operations to Make a Subsequence

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence)

```typescript
function minOperations(target: number[], arr: number[]): number {
  const orderMap = getOrderMap(target);
  const lis = getLIS(arr, orderMap);

  return target.length - lis.length + 1;
}

function getOrderMap(target: number[]): Record<number, number> {
  return target.reduce((acc, cur, index) => {
    acc[cur] = index;
    return acc;
  }, {} as { [key: number]: number });
}

function getLIS(arr: number[], orderMap: Record<number, number>): number[] {
  return arr.reduce(
    (acc, cur) => {
      const order = orderMap[cur];
      if (order === undefined) {
        return acc;
      }

      for (let i = acc.length; i >= 0; i -= 1) {
        if (acc[i] < order) {
          acc[i + 1] = order;
          break;
        }
      }

      return acc;
    },
    [-Infinity] as number[]
  );
}
```
