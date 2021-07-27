# Parcel

[백준 문제 링크](https://www.acmicpc.net/problem/16287)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [W, N] = input[0].split(" ").map(Number);
const parcels = input[1].split(" ").map(Number);
const cache = Array(W + 1).fill(false);

for (let i = 0; i < N; i += 1) {
  for (let j = i + 1; j < N; j += 1) {
    const sum = parcels[i] + parcels[j];
    if (sum > W) continue;

    if (cache[W - sum]) {
      console.log("YES");
      process.exit();
    }
  }

  for (let j = 0; j < i; j += 1) {
    const sum = parcels[i] + parcels[j];
    if (sum < W) cache[sum] = true;
  }
}

console.log("NO");
```
