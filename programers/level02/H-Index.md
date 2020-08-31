# H-Index

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42747)

```javascript
function solution(citations) {
  const sortObj = citations.reduce((p, c) => ((p[c] = (p[c] | 0) + 1), p), {});
  let stack = 0;
  for (const key of Object.keys(sortObj).reverse()) {
    if (key <= stack) return stack;
    if (stack + sortObj[key] >= key) return +key;
    stack += sortObj[key];
  }
  return citations.length;
}
```
