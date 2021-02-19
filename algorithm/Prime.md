# 소수

## 1. 소수인지 판별

```javascript
function isPrime(n) {
  if (n <= 1) return false;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}
```

## 2. 제한 숫자까지 소수 전부 구하기

```javascript
function getPrimes(max) {
  const primes = Array(max + 1).fill(true);

  for (let i = 2; i * i <= max; i += 1) {
    if (primes[i]) {
      for (let j = i; i * j <= max; j += 1) {
        primes[i * j] = false;
      }
    }
  }

  return primes;
}
```
