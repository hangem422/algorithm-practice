# solved.ac

[백준 문제 링크](https://www.acmicpc.net/problem/18110)

```typescript
import { readFileSync } from "fs";

function main() {
  const inputs = readFileSync("/dev/stdin", "utf-8").split("\n");
  const n = +inputs[0];

  if (n === 0) {
    console.log(0);
    return;
  }

  const cut = Math.round(n * 0.15);
  const activeScores = inputs
    .slice(1, 1 + n)
    .map(Number)
    .sort((a, b) => a - b)
    .slice(cut, n - cut);

  const total = activeScores.reduce((acc, cur) => acc + cur, 0);
  const average = Math.round(total / activeScores.length);

  console.log(average);
}

main();
```
