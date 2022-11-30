# Next Greater Element II

[LeetCode 문제 링크](https://leetcode.com/problems/next-greater-element-ii/description)

```typescript
type ElementStack = [number, number][];

function nextGreaterElements(nums: number[]): number[] {
  const nextGreaterElementList = Array.from(nums, () => -1);
  const stack: ElementStack = [];

  const findGreaterElement = (rightNum: number) => {
    while (isGreaterThanStackPeak(rightNum, stack)) {
      const [, index] = stack.pop() as [number, number];
      if (nextGreaterElementList[index] === -1) {
        nextGreaterElementList[index] = rightNum;
      }
    }
  };

  nums.forEach((num, index) => {
    findGreaterElement(num);
    stack.push([num, index]);
  });

  nums.forEach((num) => {
    findGreaterElement(num);
  });

  return nextGreaterElementList;
}

function isGreaterThanStackPeak(num: number, stack: ElementStack): boolean {
  if (stack.length === 0) {
    return false;
  }

  const [peak] = stack[stack.length - 1];
  return peak < num;
}
```
