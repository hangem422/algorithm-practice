# Furthest Building You Can Reach

[LeetCode 문제 링크](https://leetcode.com/problems/furthest-building-you-can-reach)

```typescript
function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const { heap, index } = getInitialHeapAndIndex(heights, ladders);
  let remainBricks = bricks;

  for (let i = index; i < heights.length; i += 1) {
    let diff = getDiffFromPrevHeight(heights, i);
    if (diff <= 0) {
      continue;
    }

    const min = heap.peak();
    if (min !== undefined && min < diff) {
      heap.poll();
      heap.add(diff);
      diff = min;
    }

    remainBricks -= diff;
    if (remainBricks < 0) {
      return i - 1;
    }
  }

  return heights.length - 1;
}

function getInitialHeapAndIndex(heights: number[], ladders: number): { heap: Heap<number>; index: number } {
  const heap = new Heap<number>((a, b) => a - b);
  let index = 1;
  let remainLadders = ladders;

  for (; index < heights.length && remainLadders > 0; index += 1) {
    const diff = getDiffFromPrevHeight(heights, index);
    if (diff > 0) {
      remainLadders -= 1;
      heap.add(diff);
    }
  }

  return { heap, index };
}

function getDiffFromPrevHeight(heights: number[], index: number): number {
  return heights[index] - heights[index - 1];
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
