# N-Queen

[백준 문제 링크](https://www.acmicpc.net/problem/9663)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

function isValid(arr, row, col) {
  return arr.every((num, i) => {
    if (row === num) return false;
    if (Math.abs(col - i) === Math.abs(num - row)) return false;
    return true;
  });
}

function dfs(n, arr) {
  const col = arr.length;
  if (col === n) return 1;

  let result = 0;

  for (let row = 0; row < n; row += 1) {
    if (!isValid(arr, row, col)) continue;
    arr.push(row);
    result += dfs(n, arr);
    arr.pop();
  }

  return result;
}

function solution(n) {
  return dfs(n, []);
}

console.log(solution(+input));
```
