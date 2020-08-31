# N으로 표현

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42895)

```javascript
function solution(N, number) {
  if (number === N) return 1;
  const cache = [...Array(8).keys()].map((i) =>
    new Set().add(+N.toString().repeat(i + 1))
  );

  for (let count = 2; count <= 8; count += 1) {
    for (let aCount = 1; aCount <= count - 1; aCount += 1) {
      cache[aCount - 1].forEach((aNum) =>
        cache[count - aCount - 1].forEach((bNum) => {
          cache[count - 1].add(aNum + bNum);
          cache[count - 1].add(Math.floor(aNum / bNum));
          cache[count - 1].add(aNum * bNum);
          cache[count - 1].add(aNum - bNum);
        })
      );
    }
    if (cache[count - 1].has(number)) return count;
  }
  return -1;
}
```
