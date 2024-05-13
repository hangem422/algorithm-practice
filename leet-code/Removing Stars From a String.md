# Removing Stars From a String

[LeetCode 문제 링크](https://leetcode.com/problems/removing-stars-from-a-string)

```typescript
function removeStars(s: string): string {
  let result = "";

  for (let i = s.length - 1, star = 0; i >= 0; i -= 1) {
    const char = s[i];
    if (char === "*") {
      star += 1;
      continue;
    }

    if (star > 0) {
      star -= 1;
      continue;
    }

    result = char + result;
  }

  return result;
}
```
