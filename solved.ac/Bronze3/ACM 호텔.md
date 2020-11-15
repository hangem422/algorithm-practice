# ACM 호텔

[백준 문제 링크](https://www.acmicpc.net/problem/10250)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [, ..._tcs] = input.map((str) => str.split(" ").map((c) => +c));

function getRoomNum(h, w, n) {
  const floor = n % h;
  const num = Math.ceil(n / h);
  return (floor === 0 ? h : floor) * 100 + num;
}

function solution(tcs) {
  return tcs.map((tc) => getRoomNum(...tc)).join("\n");
}

console.log(solution(_tcs));
```
