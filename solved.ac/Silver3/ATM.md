# ATM

[백준 문제 링크](https://www.acmicpc.net/problem/11399)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const WAITS = input[1].split(" ").map((c) => +c);

function merge(left, right) {
  const res = Array(left.length + right.length);

  let resIndex = 0;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      res[resIndex++] = left[leftIndex++];
    } else {
      res[resIndex++] = right[rightIndex++];
    }
  }

  while (leftIndex < left.length) res[resIndex++] = left[leftIndex++];
  while (rightIndex < right.length) res[resIndex++] = right[rightIndex++];

  return res;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function solution() {
  let ans = 0;
  const sortedArr = mergeSort(WAITS);

  sortedArr.reduce((prev, cur) => {
    const next = prev + cur;
    ans += next;
    return next;
  }, 0);

  return ans;
}

console.log(solution());
```
