# A → B

[백준 문제 링크](https://www.acmicpc.net/problem/16953)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

function dfs(cur, target, dp) {
  if (cur === target) return 1;
  if (cur > target) return Infinity;

  if (dp[cur] === undefined) {
    const temp1 = dfs(cur * 2, target, dp);
    const temp2 = dfs(cur * 10 + 1, target, dp);
    dp[cur] = Math.min(temp1, temp2) + 1;
  }

  return dp[cur];
}

function solution(a, b) {
  const dp = Array(b);
  const res = dfs(a, b, dp);

  return isFinite(res) ? res : -1;
}

const [a, b] = input.split(" ").map(Number);
const ans = solution(a, b);

console.log(ans);
```
