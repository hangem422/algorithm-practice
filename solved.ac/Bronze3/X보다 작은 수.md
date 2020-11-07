# X보다 작은 수

[백준 문제 링크](https://www.acmicpc.net/problem/10871)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [, _x] = input[0].split(" ").map((c) => +c);
const _nums = input[1].split(" ").map((c) => +c);

function solution(x, nums) {
  return nums.filter((v) => v < x).join(" ");
}

console.log(solution(_x, _nums));
```
