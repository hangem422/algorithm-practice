# Four Squares

[백준 문제 링크](https://www.acmicpc.net/problem/17626)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

function solution(n) {
  const dp = Array(n + 1);

  for (let i = 1; i <= n; i += 1) {
    const base = Math.sqrt(i);

    if (Number.isInteger(base)) {
      dp[i] = 1;
    } else {
      dp[i] = Infinity;

      for (let j = Math.floor(base); j > 0; j -= 1) {
        const temp = dp[i - j ** 2] + 1;
        if (dp[i] > temp) dp[i] = temp;
      }
    }
  }

  return dp[n];
}

const n = +input;
const ans = solution(n);

console.log(ans);
```
