# Find Resultant Array After Removing Anagrams

[LeetCode 문제 링크](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams)

```typescript
function removeAnagrams(words: string[]): string[] {
  const signatures = words.map(signatureOf);
  return words.filter((_, i) => i === 0 || signatures[i] !== signatures[i - 1]);
}

function signatureOf(word: string): string {
  return word.split("").sort().join("");
}
```
