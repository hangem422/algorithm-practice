# K번째 수

[백준 문제 링크](https://www.acmicpc.net/problem/1300)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function getMaxIndex(n, num) {
  const max = Math.min(n, num);
  let cnt = 0;

  for (let i = 1; i <= max; i += 1) {
    const cur = Math.floor(num / i);
    cnt += Math.min(n, cur);
  }

  return cnt;
}

function selectNum(n, k) {
  let left = 1;
  let right = n * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const index = getMaxIndex(n, mid);

    if (k <= index) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}

function solution() {
  const [n, k] = input.map(Number);
  return selectNum(n, k);
}

console.log(solution());
```
