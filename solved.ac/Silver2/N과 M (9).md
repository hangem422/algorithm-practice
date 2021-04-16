# N과 M (9)

[백준 문제 링크](https://www.acmicpc.net/problem/15663)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function dfs(n, m, arr, visit, res, temp = []) {
  if (temp.length === m) {
    res[res.length] = temp.join(" ");
    return;
  }

  for (let i = 0; i < n; i += 1) {
    if (visit[i]) continue;

    visit[i] = true;
    temp.push(arr[i]);

    dfs(n, m, arr, visit, res, temp);

    visit[i] = false;
    temp.pop();
  }
}

function solution(n, m, arr) {
  const visit = Array(n).fill(false);
  const res = [];

  arr.sort((a, b) => a - b);
  dfs(n, m, arr, visit, res);

  const set = new Set(res);
  return Array.from(set).join("\n");
}

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const ans = solution(n, m, arr);

console.log(ans);
```
