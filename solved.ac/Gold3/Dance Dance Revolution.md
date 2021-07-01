# Dance Dance Revolution

[백준 문제 링크](https://www.acmicpc.net/problem/2342)

Javascript에서 DFS를 쓰면 StackSizeExceeded 런타임 에러가 발생한다. 할 수 없이 DP의 모든 요소를 전부 순회하는 방법을 사용했다.

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

function clac(from, to) {
  if (from === 0 || to === 0) return 2;

  const diff = Math.abs(from - to);
  if (diff === 1 || diff === 3) return 3;
  return 4;
}

const arr = input.split(" ").slice(0, -1).map(Number);
const dp = Array.from({ length: arr.length + 1 }, () =>
  Array.from({ length: 5 }, () => Array(5).fill(Infinity))
);

dp[0][0][0] = 0;

arr.forEach((step, index) => {
  const next = index + 1;

  dp[index].forEach((arr, left) =>
    arr.forEach((str, right) => {
      if (str === Infinity) return;

      if (left === step || right === step) {
        dp[next][left][right] = Math.min(dp[next][left][right], str + 1);
      } else {
        dp[next][step][right] = Math.min(
          dp[next][step][right],
          str + clac(left, step)
        );
        dp[next][left][step] = Math.min(
          dp[next][left][step],
          str + clac(right, step)
        );
      }
    })
  );
});

const ans = Math.min(...dp[arr.length].flat());
console.log(ans);
```
