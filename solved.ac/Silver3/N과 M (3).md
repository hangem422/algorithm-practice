# N과 M (3)

[백준 문제 링크](https://www.acmicpc.net/problem/15651)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

const [_n, _m] = input.split(" ").map((c) => +c);

function dfs(n, m, arr) {
  if (arr.length === m) return arr.join(" ") + "\n";

  let result = "";

  for (let i = 1; i <= n; i += 1) {
    arr.push(i);
    result += dfs(n, m, arr);
    arr.pop();
  }

  return result;
}

function solution(n, m) {
  return dfs(n, m, []).trim();
}

console.log(solution(_n, _m));
```
