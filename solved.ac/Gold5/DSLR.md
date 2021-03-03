# DSLR

[백준 문제 링크](https://www.acmicpc.net/problem/9019)

링크드 리스트로 큐를 구현하면 속도가 더 빨라질 수 있을 것 같다.

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const calc = {
  funcs: ["D", "S", "L", "R"],
  D: (n) => (n * 2) % 10000,
  S: (n) => (n > 0 ? n - 1 : 9999),
  L: (n) => (n % 1000) * 10 + Math.floor(n / 1000),
  R: (n) => Math.floor(n / 10) + (n % 10) * 1000,
};

function dfs(a, b) {
  const cache = Array(10000);
  let stack = [a];
  cache[a] = "";

  while (stack.length > 0) {
    const temp = [];

    for (let i = 0; i < stack.length; i += 1) {
      const cur = stack[i];
      if (cur === b) return cache;

      calc.funcs.forEach((op) => {
        const next = calc[op](cur);

        if (cache[next] === undefined) {
          cache[next] = cache[cur] + op;
          temp.push(next);
        }
      });
    }

    stack = temp;
  }
}

function solution() {
  const t = +input[0];
  let ans = "";

  for (let i = 1; i <= t; i += 1) {
    const [a, b] = input[i].split(" ").map(Number);
    const arr = dfs(a, b);
    ans += `${arr[b]}\n`;
  }

  return ans;
}

console.log(solution());
```
