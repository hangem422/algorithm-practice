# FizzBuzz

[백준 문제 링크](https://www.acmicpc.net/problem/28702)

```typescript
import { readFileSync } from "fs";

function main() {
  const inputs = readFileSync("/dev/stdin", "utf-8").split("\n").slice(0, 3);
  const firstNumberIndex = inputs.findIndex(isNumberString);
  const num = +inputs[firstNumberIndex];
  const resultNumber = num + (3 - firstNumberIndex);
  const result = numberToFizzBuzz(resultNumber);

  console.log(result);
}

function isNumberString(str: string): boolean {
  return str !== "Fizz" && str !== "Buzz" && str !== "FizzBuzz";
}

function numberToFizzBuzz(num: number): string {
  const isMulitpleOfThree = num % 3 === 0;
  const isMultipleOfFive = num % 5 === 0;

  if (isMulitpleOfThree && isMultipleOfFive) {
    return "FizzBuzz";
  }
  if (isMulitpleOfThree) {
    return "Fizz";
  }
  if (isMultipleOfFive) {
    return "Buzz";
  }

  return `${num}`;
}

main();
```
