# A+B

[백준 문제 링크](https://www.acmicpc.net/problem/1000)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

const [A, B] = input.split(" ").map((c) => +c);

function solution(a, b) {
  return a + b;
}

console.log(solution(A, B));
```
