# 2 x n 타일링

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12900)

```javascript
function solution(n) {
  if (n < 3) return n;
  const cache = [1, 2];
  for (let i = 2; i < n; i += 1) {
    const cur = cache.shift() + cache[0];
    cache.push(cur % 1000000007);
  }
  return cache[1];
}
```
