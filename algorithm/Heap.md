# 힙

```javascript
class Heap {
  static getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  static getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  static getRightChildIndex(index) {
    return index * 2 + 2;
  }

  constructor(compFunc) {
    this.items = [];
    this.compFunc = compFunc;
  }

  get size() {
    return this.items.length;
  }

  get peak() {
    return this.items[0];
  }

  swap(a, b) {
    const temp = this.items[a];
    this.items[a] = this.items[b];
    this.items[b] = temp;
  }

  comp(a, b) {
    return this.compFunc(this.items[a], this.items[b]);
  }

  add(item) {
    let cur = this.items.push(item) - 1;
    let parent = Heap.getParentIndex(cur);

    while (parent >= 0 && this.comp(cur, parent)) {
      this.swap(cur, parent);
      cur = parent;
      parent = Heap.getParentIndex(parent);
    }
  }

  poll() {
    if (this.size < 2) return this.items.pop();

    const item = this.peak;
    this.items[0] = this.items.pop();

    let cur = 0;
    let left = Heap.getLeftChildIndex(cur);
    let right = Heap.getRightChildIndex(cur);

    while (left < this.size) {
      const target = right < this.size && this.comp(right, left) ? right : left;

      if (this.comp(cur, target)) break;
      this.swap(cur, target);

      cur = target;
      left = Heap.getLeftChildIndex(target);
      right = Heap.getRightChildIndex(target);
    }

    return item;
  }
}
```

## 1. 최대 힙

```javascript
const heap = new Heap((a, b) => a > b);
```

## 2. 최소 힙

```javascript
const heap = new Heap((a, b) => a < b);
```
