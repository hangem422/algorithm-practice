# N과 M (8)

[백준 문제 링크](https://www.acmicpc.net/problem/15654)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function dfs(n, m, arr, pre = 0, res = [], temp = []) {
  if (temp.length === m) {
    res[res.length] = temp.join(" ");
  } else {
    for (let i = pre; i < n; i += 1) {
      temp.push(arr[i]);
      dfs(n, m, arr, i, res, temp);
      temp.pop();
    }
  }

  return res;
}

function solution(n, m, arr) {
  arr.sort((a, b) => a - b);
  return dfs(n, m, arr).join("\n");
}

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const ans = solution(n, m, arr);

console.log(ans);
```
