# Maximum Length of a Concatenated String with Unique Characters

[LeetCode 문제 링크](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters)

```typescript
const CODE_OFFSET = 97;

function maxLength(arr: string[]): number {
  const chars = Array.from<boolean>({ length: 26 }).fill(false);
  return dfs(0, arr, chars);
}

function dfs(index: number, arr: string[], chars: boolean[]): number {
  if (index === arr.length) {
    return count(chars);
  }

  const skipCount = dfs(index + 1, arr, chars);
  try {
    const connectedChars = connect(chars, arr[index]);
    const connectedCount = dfs(index + 1, arr, connectedChars);
    return Math.max(skipCount, connectedCount);
  } catch {
    return skipCount;
  }
}

function count(chars: boolean[]): number {
  return chars.filter(Boolean).length;
}

function connect(chars: boolean[], str: string): boolean[] {
  const nextChars = [...chars];
  for (let i = 0; i < str.length; i += 1) {
    const index = str.charCodeAt(i) - CODE_OFFSET;
    if (nextChars[index]) {
      throw new Error();
    }

    nextChars[index] = true;
  }

  return nextChars;
}
```
