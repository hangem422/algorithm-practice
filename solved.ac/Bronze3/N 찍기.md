# N 찍기

[백준 문제 링크](https://www.acmicpc.net/problem/2741)

```javascript
const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin", "utf8").trim();

function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => n - i)
    .join("\n");
}

console.log(solution(input));
```
