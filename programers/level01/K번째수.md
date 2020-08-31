# K번째수

[프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42748)

```javascript
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let leftIndex = left;
  let rightIndex = right;
  while (leftIndex <= rightIndex) {
    while (pivot > arr[leftIndex] && leftIndex <= right) leftIndex += 1;
    while (pivot < arr[rightIndex] && rightIndex >= left) rightIndex -= 1;
    if (leftIndex <= rightIndex) {
      if (leftIndex !== rightIndex) swap(arr, leftIndex, rightIndex);
      leftIndex += 1;
      rightIndex -= 1;
    }
  }
  return leftIndex;
}

function quickSelection(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const index = partition(arr, left, right);
    if (index > k - 1) right = index - 1;
    else left = index;
  }
  return arr[k - 1];
}

function solution(array, commands) {
  return commands.reduce(
    (p, c) => (p.push(quickSelection(array.slice(c[0] - 1, c[1]), c[2])), p),
    []
  );
}
```
