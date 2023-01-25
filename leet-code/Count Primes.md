# Count Primes

[LeetCode 문제 링크](https://leetcode.com/problems/count-primes)

```typescript
function countPrimes(n: number): number {
  if (n === 0 || n === 1) {
    return 0;
  }

  const primes = Array(n).fill(true);
  let count = n - 2;

  for (let i = 2; i * i < n; i += 1) {
    if (primes[i]) {
      for (let j = i; i * j < n; j += 1) {
        const nonPrimeNum = i * j;
        if (primes[nonPrimeNum]) {
          primes[nonPrimeNum] = false;
          count -= 1;
        }
      }
    }
  }

  return count;
}
```
