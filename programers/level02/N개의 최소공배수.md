# N개의 최소공배수

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12953)

```javascript
function lcm(n1, n2) {
  let a = Math.max(n1, n2);
  let b = Math.min(n1, n2);
  while (b > 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return (n1 * n2) / a;
}

function solution(arr) {
  return arr.reduce((p, c) => lcm(p, c));
}
```
