# N-Queen

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12952)

```javascript
function isValid(arr, i) {
  return arr.every((num, index) => {
    if (num === i) return false;
    return arr.length - index !== Math.abs(num - i);
  });
}

function solution(n, arr = []) {
  if (arr.length === n) return 1;

  let result = 0;
  for (let i = 0; i < n; i += 1) {
    if (isValid(arr, i)) {
      arr.push(i);
      result += solution(n, arr);
      arr.pop();
    }
  }
  return result;
}
```
