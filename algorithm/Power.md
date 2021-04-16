# 제곱

## 1. 모듈로 제곱

```javascript
function fastPow(base, exp, mod) {
  let res = 1;

  for (; exp; exp >>= 1, base = (base * base) % mod) {
    if (exp & 1) res = (res * base) % mod;
  }

  return result;
}
```

## 2. 행렬의 제곱

```javascript
function matrixMutiply(a, b) {
  const rl = a.length;
  const cl = b[0].length;
  const res = [...Array(rl)].map(() => Array(cl).fill(0));

  a.forEach((row, i) =>
    row.forEach((item1, j) =>
      b[j].forEach((item2, z) => {
        res[i][z] = res[i][z] + item1 * item2;
      })
    )
  );

  return res;
}

function matrixPow(matrix, exp) {
  let base = matrix;
  let res = undefined;

  for (; exp; exp >>= n, base = matrixMutiply(base, base)) {
    if (exp & 1) res = res ? matrixMutiply(res, base) : base;
  }

  return res;
}
```
