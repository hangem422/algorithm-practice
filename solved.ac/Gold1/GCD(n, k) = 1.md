# GCD(n, k) = 1

[백준 문제 링크](https://www.acmicpc.net/problem/11689)

`ans = (ans * (p - 1)) / p`를 사용하면 MAX_SAFE_INTEGER를 벗어납니다.

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

let n = +input[0];
let ans = n;

const muliplyPhi = (p) => {
  if (n % p !== 0) return;
  while (n % p === 0) n /= p;
  ans = ans - ans / p;
};

muliplyPhi(2);
muliplyPhi(3);

for (let i = 5; i * i <= n; i += 6) {
  muliplyPhi(i);
  muliplyPhi(i + 2);
}

if (n > 1) muliplyPhi(n);

console.log(ans);
```
