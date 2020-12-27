# AC

[백준 문제 링크](https://www.acmicpc.net/problem/5430)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const TCS = [];

for (let i = 1; i < input.length; i += 3) {
  TCS.push({
    ops: input[i].split(""),
    arr: (0, eval)(input[i + 2]),
  });
}

function solution({ ops, arr }) {
  let forward = true;
  let left = 0;
  let right = arr.length - 1;

  const funcs = {
    D: () => {
      if (forward) left += 1;
      else right -= 1;
    },
    R: () => {
      forward = !forward;
    },
  };

  for (let i = 0; i < ops.length; i += 1) {
    funcs[ops[i]]();
    if (left === right + 2) return "error";
  }

  const ans = [];
  if (forward) for (let i = left; i <= right; i += 1) ans.push(arr[i]);
  else for (let i = right; i >= left; i -= 1) ans.push(arr[i]);

  return `[${ans.join(",")}]`;
}

console.log(TCS.map(solution).join("\n"));
```
