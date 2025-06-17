# A + B - C

[백준 문제 링크](https://www.acmicpc.net/problem/31403)

```typescript
import { readFileSync } from "fs";

function main() {
  const [a, b, c] = parseInput();
  const calcAsNumber = calc(+a, +b, +c);
  const calcAsString = calc(a, b, c);
  print(calcAsNumber, calcAsString);
}

function parseInput(): [string, string, string] {
  return readFileSync("/dev/stdin", "utf-8").split("\n") as [string, string, string];
}

function calc(a: any, b: any, c: any): number {
  return a + b - c;
}

function print(calcAsNumber: number, calcAsString: number) {
  console.log(`${calcAsNumber}\n${calcAsString}`);
}

main();
```
