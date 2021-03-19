# IOIOI

[백준 문제 링크](https://www.acmicpc.net/problem/5430)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function solution(n, str) {
  const match = str.match(/(IO)+I/g);
  let cnt = 0;

  match.forEach((group) => {
    const size = (group.length - 1) / 2 - n;
    if (size >= 0) cnt += size + 1;
  });

  return cnt;
}

const n = +input[0];
const str = input[2];

const ans = solution(n, str);

console.log(ans);
```
