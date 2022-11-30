# Next Greater Element I

[LeetCode 문제 링크](https://leetcode.com/problems/next-greater-element-i/description)

```typescript
type NextGreaterElementMap = { [key: number]: number };

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = getHNextGreaterElementMap(nums2);
  return nums1.map((num) => getEleementFromNextGreaterElementMap(num, map));
}

function getHNextGreaterElementMap(nums: number[]): NextGreaterElementMap {
  const stack: number[] = [];
  const map: NextGreaterElementMap = {};

  const fillMap = (rightNum: number) => {
    while (isGreaterThanStackPeak(rightNum, stack)) {
      const leftNum = stack.pop() as number;
      if (map[leftNum] === undefined) {
        map[leftNum] = rightNum;
      }
    }
  };

  nums.forEach((num) => {
    fillMap(num);
    stack.push(num);
  });

  return map;
}

function isGreaterThanStackPeak(num: number, stack: number[]): boolean {
  return stack.length !== 0 && stack[stack.length - 1] < num;
}

function getEleementFromNextGreaterElementMap(key: number, map: NextGreaterElementMap) {
  return key in map ? map[key] : -1;
}
```
