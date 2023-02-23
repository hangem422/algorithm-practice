# Task Sc

[LeetCode 문제 링크](https://leetcode.com/problems/task-scheduler)

```typescript
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

function leastInterval(tasks: string[], n: number): number {
  const taskHeap = makeTaskHeap(tasks);
  const penddingQue: [string, number, number][] = []; // [task, count, until]
  let time = 0;

  const wakeupTasks = () => {
    while (penddingQue.length > 0) {
      const [task, count, until] = penddingQue[0];
      if (until <= time) {
        taskHeap.add([task, count]);
        penddingQue.shift();
      } else {
        break;
      }
    }
  };

  const completeSingleTask = () => {
    time += 1;
    if (taskHeap.size === 0) {
      return;
    }

    const [task, count] = taskHeap.poll()!;
    if (count > 1) {
      penddingQue.push([task, count - 1, time + n]);
    }
  };

  while (taskHeap.size > 0 || penddingQue.length > 0) {
    wakeupTasks();
    completeSingleTask();
  }

  return time;
}

function makeTaskHeap(tasks: string[]) {
  const countMap = makeCountMap(tasks);
  const taskHeap = new Heap<[string, number]>(([, count1], [, count2]) => count2 - count1); // [task, count]

  for (const taskAndCount of countMap) {
    taskHeap.add(taskAndCount);
  }

  return taskHeap;
}

function makeCountMap(tasks: string[]) {
  const countMap = new Map<string, number>(); // [task, count]
  tasks.forEach((task) => countMap.set(task, (countMap.get(task) ?? 0) + 1));

  return countMap;
}
```
