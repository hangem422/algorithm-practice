# 문자열 내 p와 y의 개수

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12916)

```javascript
function solution(s) {
  let result = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i].toLowerCase() === "p") result += 1;
    else if (s[i].toLowerCase() === "y") result -= 1;
  }
  return result === 0;
}
```
