# Word Pattern

[LeetCode 문제 링크](https://leetcode.com/problems/word-pattern)

```typescript
function wordPattern(pattern: string, s: string): boolean {
  const letterList = s.split(" ");
  if (letterList.length !== pattern.length) {
    return false;
  }

  const keyMap = new Map<string, string>();
  const letterSet = new Set<string>();

  for (let i = 0; i < letterList.length; i += 1) {
    const letter = letterList[i];
    const key = pattern[i];

    if (keyMap.has(key)) {
      if (keyMap.get(key) === letter) {
        continue;
      }

      return false;
    }

    if (letterSet.has(letter)) {
      return false;
    }

    keyMap.set(key, letter);
    letterSet.add(letter);
  }

  return true;
}
```
