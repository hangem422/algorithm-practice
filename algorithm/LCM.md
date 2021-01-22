# 최소공배수

## 1. GCD

```javascript
function getGcd(a, b) {
  while (b > 0) {
    const r = a % b;
    a = b;
    b = r;
  }

  return a;
}
```

## 2. LCM

```javascript
function getLcm(a, b) {
  const gcd = getGcd(a, b);
  return (a * b) / gcd;
}
```
