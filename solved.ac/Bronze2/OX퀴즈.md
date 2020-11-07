# OX퀴즈

[백준 문제 링크](https://www.acmicpc.net/problem/8958)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

input.shift();

function getScore(str) {
  let score = 0;
  let acc = 1;

  [].forEach.call(str, (c) => {
    if (c === "X") acc = 1;
    else score += acc++;
  });

  return score;
}

function solution(tc) {
  return tc.map(getScore).join("\n");
}

console.log(solution(input));
```
