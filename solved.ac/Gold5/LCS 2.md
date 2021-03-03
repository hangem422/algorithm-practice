# LCS 2

[백준 문제 링크](https://www.acmicpc.net/problem/9252)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function getFromMatrix(matrix, row, col) {
  return matrix[row]?.[col] ?? 0;
}

function solution() {
  const [baseStr, targetStr] = input;
  const dp = Array.from(Array(targetStr.length), () => Array(baseStr.length));

  [].forEach.call(targetStr, (targetChar, ti) => {
    [].forEach.call(baseStr, (baseChar, bi) => {
      if (targetChar === baseChar) {
        const prev = getFromMatrix(dp, ti - 1, bi - 1);
        dp[ti][bi] = prev + 1;
      } else {
        const inc = getFromMatrix(dp, ti, bi - 1);
        const dec = getFromMatrix(dp, ti - 1, bi);
        dp[ti][bi] = Math.max(inc, dec);
      }
    });
  });

  let ti = targetStr.length - 1;
  let bi = baseStr.length - 1;
  const cnt = dp[ti][bi];
  let history = "";

  while (ti >= 0 && bi >= 0 && dp[ti][bi] > 0) {
    if (dp[ti][bi] === getFromMatrix(dp, ti - 1, bi)) {
      ti -= 1;
    } else if (dp[ti][bi] === getFromMatrix(dp, ti, bi - 1)) {
      bi -= 1;
    } else {
      history = baseStr[bi] + history;
      ti -= 1;
      bi -= 1;
    }
  }

  return `${cnt}\n${history}`;
}

console.log(solution());
```
