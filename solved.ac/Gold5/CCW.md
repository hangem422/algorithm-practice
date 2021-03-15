# CCW

[백준 문제 링크](https://www.acmicpc.net/problem/11758)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function solution(x1, y1, x2, y2, x3, y3) {
  const num1 = (x2 - x1) * (y3 - y1);
  const num2 = (y2 - y1) * (x3 - x1);

  if (num1 > num2) return "1";
  if (num1 < num2) return "-1";
  return "0";
}

const [x1, y1, x2, y2, x3, y3] = input
  .map((line) => line.split(" ").map(Number))
  .flat();

const ans = solution(x1, y1, x2, y2, x3, y3);

console.log(ans);
```
