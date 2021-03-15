# Hashing

[백준 문제 링크](https://www.acmicpc.net/problem/15829)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const R = 31;
const M = 1234567891;

function solution(l, str) {
  let sum = 0;

  for (let i = 0, r = 1; i < l; i += 1, r = (r * R) % M) {
    const num = str.charCodeAt(i) - 96;
    const cur = (num * r) % M;
    sum = (sum + cur) % M;
  }

  return sum;
}

const l = +input[0];
const str = input[1];

const ans = solution(l, str);

console.log(ans);
```
