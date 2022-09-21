# Ransom Note

[LeetCode 문제 링크](https://leetcode.com/problems/ransom-note)

일반적으로 푼 방식과 함수형 프로그래밍을 연습하면서 푼 방식의 성능 차이가 심하다.

## 일반 풀이

131ms / 45.3MB

```typescript
function canConstruct(ransomNote: string, magazine: string): boolean {
  const letterMap = getLetterMapFromString(magazine);
  for (const letter of ransomNote) {
    const count = letterMap.get(letter);
    if (count === undefined || count === 0) {
      return false;
    }
    letterMap.set(letter, count - 1);
  }
  return true;
}

function getLetterMapFromString(str: string): Map<string, number> {
  const letterMap = new Map<string, number>();
  for (const letter of str) {
    const count = letterMap.get(letter) ?? 0;
    letterMap.set(letter, count + 1);
  }
  return letterMap;
}
```

## 함수형 풀이

594ms / 50MB

```javascript
type LetterMap = { [letter: string]: number };

function canConstruct(ransomNote: string, magazine: string): boolean {
  let letterMap = getLetterMapFromString(magazine);
  return stringEvery(ransomNote, (letter) => {
    letterMap = decreaseLettterCountOfLetterMap(letterMap, letter);
    return hasLetterMapEnoughCount(letterMap, letter);
  });
}

function getLetterMapFromString(str: string): LetterMap {
  return stringReduce(str, (letterMap, letter) => increaseLettterCountOfLetterMap(letterMap, letter), {});
}

function stringReduce<T>(str: string, reducer: (acc: T, letter: string) => T, initial: T): T {
  let result = initial;
  for (const letter of str) {
    result = reducer(result, letter);
  }
  return result;
}

function stringEvery(str: string, conditon: (letter: string) => boolean) {
  for (const letter of str) {
    if (!conditon(letter)) {
      return false;
    }
  }
  return true;
}

function increaseLettterCountOfLetterMap(letterMap: LetterMap, letter: string): LetterMap {
  return updateLetterCountOfLetterMap(letterMap, letter, (count) => count + 1);
}

function decreaseLettterCountOfLetterMap(letterMap: LetterMap, letter: string): LetterMap {
  return updateLetterCountOfLetterMap(letterMap, letter, (count) => count - 1);
}

function updateLetterCountOfLetterMap(
  letterMap: LetterMap,
  letter: string,
  updater: (count: number) => number
): LetterMap {
  const count = letterMap[letter] ?? 0;
  return { ...letterMap, [letter]: updater(count) };
}

function hasLetterMapEnoughCount(letterMap: LetterMap, letter: string): boolean {
  return (letterMap[letter] ?? -1) >= 0;
}
```
