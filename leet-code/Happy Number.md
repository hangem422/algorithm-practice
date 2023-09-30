# Happy Number

[LeetCode 문제 링크](https://leetcode.com/problems/happy-number)

```typescript
function isHappy(n: number, mem: Set<number> = new Set()): boolean {
  if (n === 1) {
    return true;
  }

  if (mem.has(n)) {
    return false;
  }
  mem.add(n);

  const digits = `${n}`.split("").map(Number);
  const sum = digits.reduce((acc, digit) => acc + digit * digit, 0);

  return isHappy(sum, mem);
}
```
