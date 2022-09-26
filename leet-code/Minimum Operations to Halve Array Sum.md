# Minimum Operations to Halve Array Sum

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-operations-to-halve-array-sum)

```typescript
function halveArray(nums: number[]): number {
  const { heap, sum: originSum } = getMAxHeapAndSumFromNums(nums);
  const originHalf = originSum / 2;

  let sum = 0;
  let operationCount = 0;

  while (sum < originHalf) {
    const max = heap.poll();
    if (max === undefined) {
      throw new Error();
    }

    operationCount += 1;
    const half = max / 2;
    sum += half;
    heap.add(half);
  }

  return operationCount;
}

function getMAxHeapAndSumFromNums(nums: number[]): { heap: Heap<number>; sum: number } {
  const heap = new Heap((a: number, b: number) => b - a);
  let sum = 0;

  nums.forEach((num) => {
    heap.add(num);
    sum += num;
  });

  return { heap, sum };
}

class Heap<T> {
  private items: T[];
  private compare: (a: T, b: T) => number;

  public static getParentIndexOf(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  public static getLeftChildIndexOf(index: number): number {
    return index * 2 + 1;
  }

  public static getRightChildIndexOf(index: number): number {
    return index * 2 + 2;
  }

  constructor(compare: (a: T, b: T) => number) {
    this.items = [];
    this.compare = compare;
  }

  get size(): number {
    return this.items.length;
  }

  peak(): T | undefined {
    if (this.size > 0) {
      return this.items[0];
    }
  }

  add(item: T): void {
    let current = this.items.push(item) - 1;
    let parent = Heap.getParentIndexOf(current);

    while (this.isHigherPriority(current, parent)) {
      this.swap(current, parent);
      current = parent;
      parent = Heap.getParentIndexOf(current);
    }
  }

  private isHigherPriority(index: number, targetIndex: number): boolean {
    if (this.isValidIndex(index) && this.isValidIndex(targetIndex)) {
      return this.compare(this.items[index], this.items[targetIndex]) <= 0;
    }

    return false;
  }

  private isValidIndex(index: number): boolean {
    return index >= 0 && index < this.size;
  }

  private swap(index1: number, index2: number) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  poll(): T | undefined {
    if (this.size < 2) {
      return this.items.pop();
    }

    const item = this.shift();
    let current = 0;

    while (this.isValidIndex(Heap.getLeftChildIndexOf(current))) {
      const higherPriorityChild = this.getHigherPriorityChildIndexOf(current);
      if (this.isHigherPriority(current, higherPriorityChild)) {
        break;
      }

      this.swap(current, higherPriorityChild);
      current = higherPriorityChild;
    }

    return item;
  }

  private shift(): T | undefined {
    if (this.size === 1) {
      return this.items.pop();
    }
    if (this.size > 1) {
      const item = this.peak() as T;
      this.items[0] = this.items.pop() as T;
      return item;
    }
  }

  private getHigherPriorityChildIndexOf(index: number) {
    const left = Heap.getLeftChildIndexOf(index);
    const right = Heap.getRightChildIndexOf(index);
    return this.isHigherPriority(right, left) ? right : left;
  }
}
```
