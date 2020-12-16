# RGB거리

[백준 문제 링크](https://www.acmicpc.net/problem/1149)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [, ...TCS] = input.map((str) => str.split(" ").map((c) => +c));

function solution() {
  let matrix = TCS[0];
  const temp = Array(3);

  for (let i = 1; i < TCS.length; i += 1) {
    temp[0] = Math.min(matrix[1], matrix[2]) + TCS[i][0];
    temp[1] = Math.min(matrix[0], matrix[2]) + TCS[i][1];
    temp[2] = Math.min(matrix[0], matrix[1]) + TCS[i][2];

    matrix[0] = temp[0];
    matrix[1] = temp[1];
    matrix[2] = temp[2];
  }

  return Math.min(...matrix);
}

console.log(solution());
```
