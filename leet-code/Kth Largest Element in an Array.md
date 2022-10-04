# Kth Largest Element in an Array

[LeetCode 문제 링크](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity)

```typescript
function findKthLargest(nums: number[], k: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const index = partition(nums, left, right);
    if (index > k - 1) {
      right = index - 1;
    } else {
      left = index;
    }
  }

  return nums[k - 1];
}

function partition(nums: number[], left: number, right: number): number {
  const mid = Math.floor((left + right) / 2);
  const pivot = nums[mid];
  let leftIndex = left;
  let rightIndex = right;

  while (leftIndex <= rightIndex) {
    while (pivot > nums[leftIndex] && leftIndex <= right) {
      leftIndex += 1;
    }
    while (pivot < nums[rightIndex] && rightIndex >= left) {
      rightIndex -= 1;
    }

    if (leftIndex <= rightIndex) {
      swap(nums, leftIndex, rightIndex);
      leftIndex += 1;
      rightIndex -= 1;
    }
  }

  return leftIndex;
}

function swap<T>(arr: T[], index1: number, index2: number): void {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
```
