# Number Complement

[LeetCode 문제 링크](https://leetcode.com/problems/number-complement)

```typescript
function findComplement(num: number): number {
  return (fastPow(2, Math.ceil(Math.log2(num))) - 1) & ~num;
}

function fastPow(base: number, exp: number) {
  let res = 1;

  for (let num = base; exp; exp >>= 1, num = num * num) {
    if (exp & 1) {
      res = res * num;
    }
  }

  return res;
}
```
