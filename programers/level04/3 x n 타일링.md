# 3 x n 타일링

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12902)

```javascript
function solution(n) {
  if (n % 2 > 0) return 0;
  const matrix = [1, 3];
  for (let i = 2; i <= n / 2; i += 1) {
    const temp1 = matrix[i - 1] * 3;
    const temp2 = matrix.slice(0, -1).reduce((prev, cur) => prev + cur * 2, 0);
    matrix.push((temp1 + temp2) % 1000000007);
  }
  return matrix[matrix.length - 1];
}
```
