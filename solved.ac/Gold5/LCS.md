# LCS

[백준 문제 링크](https://www.acmicpc.net/problem/9251)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();

const [STR1, STR2] = input.split("\n");

function solution() {
  const length1 = STR1.length;
  const length2 = STR2.length;

  const matrixRow = Array(length2 + 1).fill(0);
  const matrix = [...Array(length1 + 1)].map(() => [...matrixRow]);

  for (let i = 1; i <= length1; i += 1) {
    for (let j = 1; j <= length2; j += 1) {
      if (STR1[i - 1] === STR2[j - 1]) matrix[i][j] = matrix[i - 1][j - 1] + 1;
      else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
    }
  }

  return matrix[length1][length2];
}

console.log(solution());
```
