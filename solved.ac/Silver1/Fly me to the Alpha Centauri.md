# Fly me to the Alpha Centauri

[백준 문제 링크](https://www.acmicpc.net/problem/1011)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [, ..._tcs] = input.map((str) => str.split(" ").map((c) => +c));

function getTeleportCnt(x, y) {
  const dis = y - x;
  const num = Math.floor(Math.sqrt(dis));
  const pow = Math.pow(num, 2);

  if (dis === pow) return 2 * num - 1;
  else if (dis <= pow + num) return 2 * num;
  return 2 * num + 1;
}

function solution(tcs) {
  return tcs.map((tc) => getTeleportCnt(...tc)).join("\n");
}

console.log(solution(_tcs));
```
