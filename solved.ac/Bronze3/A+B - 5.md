# A+B - 5

[백준 문제 링크](https://www.acmicpc.net/problem/10952)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const tc = input.map((str) => str.split(" ").map((c) => +c));
tc.pop();

function solution(tc) {
  return tc.map(([a, b]) => a + b).join("\n");
}

console.log(solution(tc));
```
