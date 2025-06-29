# ISBN

[백준 문제 링크](https://www.acmicpc.net/problem/14626)

```typescript
import { readFileSync } from "fs";

function main() {
  const lines = readFileSync("/dev/stdin", "utf-8").split("\n");
  const isbn = lines[0].split("");
  const weights = [1, 3];

  let problemWeuight = weights[0];
  let sum = 0;

  isbn.forEach((num, index) => {
    const weight = weights[index % 2];
    if (num === "*") {
      problemWeuight = weight;
    } else {
      sum += +num * weight;
    }
  });

  let num = (10 - (sum % 10)) % 10;
  while (num % problemWeuight !== 0) {
    num += 10;
  }

  console.log(num / problemWeuight);
}

main();
```
