# Z

[백준 문제 링크](https://www.acmicpc.net/problem/1074)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

function dfs(size, row, col) {
  if (row < 0) return 0;
  if (col < 0 && row < size) return 0;
  if (row >= size || col >= size) return size * size;

  const next = size >> 1;
  const lt = dfs(next, row, col);
  const rt = dfs(next, row, col - next);
  const lb = dfs(next, row - next, col);
  const rb = dfs(next, row - next, col - next);

  return lt + rt + lb + rb;
}

function solution(n, r, c) {
  const size = Math.pow(2, n);
  return dfs(size, r, c);
}

const [n, r, c] = input.split(" ").map(Number);
const ans = solution(n, r, c);

console.log(ans);
```
