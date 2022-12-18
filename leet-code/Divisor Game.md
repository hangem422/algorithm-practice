# Divisor Game

[LeetCode 문제 링크](https://leetcode.com/problems/build-an-array-with-stack-operations)

```typescript
function divisorGame(n: number): boolean {
  const cache = Array.from<boolean | undefined>({ length: n + 1 });
  return canWin(n, cache);
}

function canWin(num: number, cache: (boolean | undefined)[]): boolean {
  if (cache[num] === undefined) {
    cache[num] = getDivisorList(num).some((divisor) => !canWin(num - divisor, cache));
  }

  return cache[num] as boolean;
}

function getDivisorList(num: number) {
  if (num <= 1) {
    return [];
  }

  const divisorList: number[] = [1];
  const sqrt = Math.sqrt(num);
  if (Number.isInteger(sqrt)) {
    divisorList.push(sqrt);
  }

  for (let divisor = 2; divisor * divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      divisorList.push(divisor, num / divisor);
    }
  }

  return divisorList;
}
```
