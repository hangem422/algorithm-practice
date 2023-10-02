# 정렬

## 1. 병합 정렬

```javascript
function merge(left, right) {
  const res = Array(left.length + right.length);

  let resIndex = 0;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      res[resIndex] = left[leftIndex];
      leftIndex += 1;
    } else {
      res[resIndex] = right[rightIndex];
      rightIndex += 1;
    }

    resIndex += 1;
  }

  while (leftIndex < left.length) {
    res[resIndex] = left[leftIndex];
    leftIndex += 1;
    resIndex += 1;
  }

  while (rightIndex < right.length) {
    res[resIndex] = right[rightIndex];
    rightIndex += 1;
    resIndex += 1;
  }

  return res;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

## 2. 빠른 정렬

```javascript
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function partition(arr, left, right) {
  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  let leftIndex = left;
  let rightIndex = right;

  while (leftIndex <= rightIndex) {
    while (pivot > arr[leftIndex] && leftIndex <= right) {
      leftIndex += 1;
    }
    while (pivot < arr[rightIndex] && rightIndex >= left) {
      rightIndex -= 1;
    }

    if (leftIndex <= rightIndex) {
      if (leftIndex !== rightIndex) swap(arr, leftIndex, rightIndex);
      leftIndex += 1;
      rightIndex -= 1;
    }
  }

  return leftIndex;
}

function quickSort(arr, left, right) {
  if (arr.length < 2) return arr;

  const index = partition(arr, left, right);
  if (left < index - 1) quickSort(arr, left, index - 1);
  if (index < right) quickSort(arr, index, right);

  return arr;
}
```

## 3. 빠른 선택

```javascript
function quickSelect(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const index = partition(arr, left, right);
    if (index > k - 1) right = index - 1;
    else left = index;
  }

  return arr[k - 1];
}
```
