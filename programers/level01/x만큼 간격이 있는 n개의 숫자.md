# x만큼 간격이 있는 n개의 숫자

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12954)

```javascript
function solution(x, n) {
  return new Array(n).fill(x).map((v, i) => v * (i + 1));
}
```
