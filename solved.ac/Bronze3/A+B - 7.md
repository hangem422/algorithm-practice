# A+B - 7

[백준 문제 링크](https://www.acmicpc.net/problem/11021)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [, ...tc] = input.map((str) => str.split(" ").map((c) => +c));

function solution(tc) {
  return tc
    .map(([a, b]) => a + b)
    .map((v, i) => `Case #${i + 1}: ${v}`)
    .join("\n");
}

console.log(solution(tc));
```
