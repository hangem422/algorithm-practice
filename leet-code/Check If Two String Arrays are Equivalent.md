# Check If Two String Arrays are Equivalent

[LeetCode 문제 링크](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent)

```typescript
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join("") === word2.join("");
}
```
