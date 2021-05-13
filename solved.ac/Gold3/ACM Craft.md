# ACM Craft

[백준 문제 링크](https://www.acmicpc.net/problem/1005)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function makeConnection(n, xys) {
  const con = Array.from({ length: n + 1 }, () => []);
  xys.forEach(([x, y]) => con[y].push(x));

  return con;
}

function dfs(cur, con, cache, d) {
  if (cache[cur] === undefined) {
    let max = 0;

    con[cur].forEach((next) => {
      const alt = dfs(next, con, cache, d);
      if (max < alt) max = alt;
    });

    cache[cur] = max + d[cur - 1];
  }

  return cache[cur];
}

function solution(n, k, d, xys, w) {
  const cache = Array(n + 1);
  const con = makeConnection(n, xys);
  const res = dfs(w, con, cache, d);

  return res;
}

const tcnt = +input[0];
const ans = Array(tcnt);

const parseInputString = (str) => str.split(" ").map(Number);

for (let i = 0, line = 1; i < tcnt; i += 1) {
  const [n, k] = parseInputString(input[line++]);
  const d = parseInputString(input[line++]);
  const xys = input.slice(line, (line += k)).map(parseInputString);
  const w = +input[line++];

  ans[i] = solution(n, k, d, xys, w);
}

console.log(ans.join("\n"));
```
