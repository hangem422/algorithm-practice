# Smallest Value After Replacing With Sum of Prime Factors

[LeetCode 문제 링크](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors)

```typescript
function smallestValue(n: number): number {
  const primeList = getPrimeList(n);
  let smallestValue: number = n;

  while (vlaidatePrime(smallestValue, primeList) === false) {
    const factorList = getPrimeFactorList(smallestValue, primeList);
    const nextSmallestValue = factorList.reduce((acc, cur) => acc + cur, 0);
    if (nextSmallestValue >= smallestValue) {
      break;
    }

    smallestValue = nextSmallestValue;
  }

  return smallestValue;
}

function getPrimeList(max: number) {
  const primes = Array(max + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i * i <= max; i += 1) {
    if (primes[i]) {
      for (let j = i; i * j <= max; j += 1) {
        primes[i * j] = false;
      }
    }
  }

  return primes;
}

function getPrimeFactorList(n: number, primeList: boolean[]): number[] {
  const primeFactor = findPrimeFactor(n, primeList);
  if (primeFactor) {
    return [primeFactor].concat(getPrimeFactorList(n / primeFactor, primeList));
  }
  return [];
}

function findPrimeFactor(n: number, primeList: boolean[]): number | undefined {
  for (let num = 2; num <= n; num += 1) {
    if (vlaidatePrime(num, primeList) && n % num === 0) {
      return num;
    }
  }
}

function vlaidatePrime(n: number, primeList: boolean[]): boolean {
  return Boolean(primeList[n]);
}
```
