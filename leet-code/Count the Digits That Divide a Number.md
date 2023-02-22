# Count the Digits That Divide a Number

[LeetCode 문제 링크](https://leetcode.com/problems/count-the-digits-that-divide-a-number)

```typescript
function countDigits(num: number): number {
  return num
    .toString()
    .split("")
    .map(Number)
    .filter((n) => num % n === 0).length;
}
```
