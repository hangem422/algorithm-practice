# RGB거리 2

[백준 문제 링크](https://www.acmicpc.net/problem/17404)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function clacMinPrice(start, n, prices) {
  const res = Array(3).fill(Infinity);
  const temp = Array(3);

  res[start] = prices[0][start];

  for (let i = 1; i < n; i += 1) {
    temp[0] = Math.min(res[1], res[2]) + prices[i][0];
    temp[1] = Math.min(res[0], res[2]) + prices[i][1];
    temp[2] = Math.min(res[0], res[1]) + prices[i][2];

    res[0] = temp[0];
    res[1] = temp[1];
    res[2] = temp[2];
  }

  res[start] = Infinity;

  return Math.min(...res);
}

function solution(n, prices) {
  let res = Infinity;

  for (let i = 0; i < 3; i += 1) {
    const alt = clacMinPrice(i, n, prices);
    if (alt < res) res = alt;
  }

  return res;
}

const n = +input[0];
const prices = input.slice(1).map((line) => line.split(" ").map(Number));
const ans = solution(n, prices);

console.log(ans);
```
