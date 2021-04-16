# N과 M (5)

[백준 문제 링크](https://www.acmicpc.net/problem/15654)

문제에는 수열은 사전 순으로 증가하는 순서로 출력해야 한다고 적혀있지만, 문자의 오름차순으로 출력하면 틀린다. 숫자의 오름차순으로 출력해야한다.

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function dfs(n, m, arr, res, temp, visited) {
  if (temp.length === m) {
    res[res.length] = temp.join(" ");
    return;
  }

  for (let i = 0; i < n; i += 1) {
    if (visited[i]) continue;

    visited[i] = true;
    temp.push(arr[i]);

    dfs(n, m, arr, res, temp, visited);

    visited[i] = false;
    temp.pop();
  }
}

function solution(n, m, arr) {
  const visited = Array(n).fill(false);
  const res = [];

  dfs(n, m, arr, res, [], visited);

  return res.join("\n");
}

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const ans = solution(n, m, arr);

console.log(ans);
```
