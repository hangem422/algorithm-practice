# Largest Number After Digit Swaps by Parity

[LeetCode 문제 링크](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity)

```typescript
function largestInteger(num: number): number {
  const numList = parseNumToNumList(num);
  const mexNumList = getLargestNumListWithParity(numList);
  return parseNumListToNumber(mexNumList);
}

function parseNumToNumList(num: number): number[] {
  return num.toString().split("").map(Number);
}

function parseNumListToNumber(numList: number[]): number {
  return Number(numList.join(""));
}

function sortDescendingNumList(numList: number[]) {
  return [...numList].sort((a, b) => b - a);
}

function getLargestNumListWithParity(numList: number[]): number[] {
  const sortedNumList = sortDescendingNumList(numList);
  let oddIndex = findOddIndex(sortedNumList);
  let evenIndex = findEvenIndex(sortedNumList);

  return numList.map((num) => {
    let index: number;

    if (isOdd(num)) {
      index = oddIndex;
      oddIndex = findOddIndex(sortedNumList, oddIndex + 1);
    } else {
      index = evenIndex;
      evenIndex = findEvenIndex(sortedNumList, evenIndex + 1);
    }

    return sortedNumList[index];
  });
}

function isOdd(num: number): boolean {
  return num % 2 === 1;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function findOddIndex(numList: number[], startIndex: number = 0): number {
  return findIndex(numList, isOdd, startIndex);
}

function findEvenIndex(numList: number[], startIndex: number = 0): number {
  return findIndex(numList, isEven, startIndex);
}

function findIndex(numList: number[], condition: (num: number) => boolean, startIndex: number): number {
  for (let i = startIndex; i < numList.length; i += 1) {
    if (condition(numList[i])) {
      return i;
    }
  }
  return -1;
}
```
