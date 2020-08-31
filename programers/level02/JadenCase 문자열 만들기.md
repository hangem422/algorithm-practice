# JadenCase 문자열 만들기

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12951)

```javascript
function solution(s) {
  let result = s[0].toUpperCase();
  for (let i = 1; i < s.length; i += 1) {
    result += result[i - 1] === " " ? s[i].toUpperCase() : s[i].toLowerCase();
  }
  return result;
}
```
