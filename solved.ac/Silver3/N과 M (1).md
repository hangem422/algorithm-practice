# N과 M (1)

[백준 문제 링크](https://www.acmicpc.net/problem/15649)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

const [_n, _m] = input.split(" ").map((c) => +c);

function dfs(n, m, arr, visited) {
  if (arr.length === m) return arr.join(" ") + "\n";

  let result = "";

  for (let i = 1; i <= n; i += 1) {
    if (visited[i]) continue;
    visited[i] = true;
    arr.push(i);
    result += dfs(n, m, arr, visited);
    visited[i] = false;
    arr.pop();
  }

  return result;
}

function solution(n, m) {
  const visited = Array(n + 1).fill(false);
  const arr = [];
  return dfs(n, m, arr, visited).trim();
}

console.log(solution(_n, _m));
```
