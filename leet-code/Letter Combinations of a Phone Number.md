# Letter Combinations of a Phone Number

[LeetCode 문제 링크](https://leetcode.com/problems/letter-combinations-of-a-phone-number)

```typescript
const REPRESENTS: readonly (readonly string[])[] = [
  [],
  [],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
] as const;

function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }

  const numberList = getNumberList(digits);
  return getCombinations({ numberList, currentIndex: 0, acc: "" });
}

function getNumberList(digits: string): number[] {
  return digits.split("").map(Number);
}

function getCombinations(params: { numberList: number[]; currentIndex: number; acc: string }): string[] {
  const { numberList, currentIndex, acc } = params;
  if (currentIndex === numberList.length) {
    return [acc];
  }

  const number = numberList[currentIndex];
  let combinationList: string[] = [];

  REPRESENTS[number].forEach((char) => {
    combinationList = combinationList.concat(
      getCombinations({ numberList, currentIndex: currentIndex + 1, acc: acc + char })
    );
  });

  return combinationList;
}
```
