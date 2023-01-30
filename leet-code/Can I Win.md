# Can I Win

[LeetCode 문제 링크](https://leetcode.com/problems/can-i-win)

```typescript
function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  if (isInvalidGame(maxChoosableInteger, desiredTotal)) {
    return false;
  }

  const bitCache = Array.from<boolean | undefined>({ length: 1 << maxChoosableInteger });
  const bitCollection = getBitCollection(maxChoosableInteger);
  const result = dfs(maxChoosableInteger, desiredTotal, bitCache, 0, bitCollection);

  return result;
}

function isInvalidGame(maxChoosableInteger: number, desiredTotal: number) {
  return (maxChoosableInteger + 1) * maxChoosableInteger < desiredTotal * 2;
}

function getBitCollection(maxChoosableInteger: number) {
  const bitCollection = Array.from<number>({ length: maxChoosableInteger });
  bitCollection[0] = 0;

  for (let num = 1, numBit = 1; num <= maxChoosableInteger; num += 1, numBit <<= 1) {
    bitCollection[num] = numBit;
  }

  return bitCollection;
}

function dfs(
  maxChoosableInteger: number,
  desiredTotal: number,
  bitCache: Array<boolean | undefined>,
  bit: number,
  bitCollection: number[]
): boolean {
  if (bitCache[bit] === undefined) {
    for (let num = 1; num <= maxChoosableInteger; num += 1) {
      const numBit = bitCollection[num];
      if (bit & numBit) {
        continue;
      }

      const nextDesiredTotal = desiredTotal - num;
      if (nextDesiredTotal <= 0) {
        bitCache[bit] = true;
        break;
      }

      const nextBit = bit | numBit;
      if (!dfs(maxChoosableInteger, nextDesiredTotal, bitCache, nextBit, bitCollection)) {
        bitCache[bit] = true;
        break;
      }
    }

    if (bitCache[bit] === undefined) {
      bitCache[bit] = false;
    }
  }

  return bitCache[bit]!;
}
```
