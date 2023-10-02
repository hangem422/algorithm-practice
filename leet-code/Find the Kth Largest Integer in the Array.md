# Find the Kth Largest Integer in the Array

[LeetCode 문제 링크](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array)

## Sort API 사용하기

```typescript
function kthLargestNumber(nums: string[], k: number): string {
  return [...nums].sort((a, b) => {
    if (a.length === b.length) {
      return a < b ? 1 : -1;
    }
    return b.length - a.length;
  })[k - 1];
}
```

## Quick Select 구현하기

Bigint를 사용했더니 Memory 효율이 좋지 못하다. 위 **Sort API 사용하기** 풀이의 비교 함수를 이용해서, Bigint로 파싱하지 않고 문자열 그대로 사용한다면 성능이 좋아질 것 같다.

```typescript
function kthLargestNumber(nums: string[], k: number): string {
  return quickSelect(nums.map(BigInt), nums.length - k + 1).toString();
}

function quickSelect(arr: Array<BigInt>, k: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const index = partition(arr, left, right);
    if (index > k - 1) {
      right = index - 1;
    } else {
      left = index;
    }
  }

  return arr[k - 1];
}

function partition(arr: Array<BigInt>, left: number, right: number): number {
  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];

  let leftIndex = left;
  let rightIndex = right;

  while (leftIndex <= rightIndex) {
    while (arr[leftIndex] < pivot && leftIndex <= right) {
      leftIndex += 1;
    }
    while (pivot < arr[rightIndex] && rightIndex >= left) {
      rightIndex -= 1;
    }

    if (leftIndex <= rightIndex) {
      if (leftIndex !== rightIndex) {
        swap(arr, leftIndex, rightIndex);
      }
      leftIndex += 1;
      rightIndex -= 1;
    }
  }

  return leftIndex;
}

function swap(arr: Array<BigInt>, index1: number, index2: number) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
```
