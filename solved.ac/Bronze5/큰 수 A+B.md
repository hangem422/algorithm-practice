# 큰 수 A+B

[백준 문제 링크](https://www.acmicpc.net/problem/10757)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

function solution() {
  const [a, b] = input.split(" ").map((c) => BigInt(c));
  const sum = a + b;

  return sum.toString();
}

console.log(solution());
```
