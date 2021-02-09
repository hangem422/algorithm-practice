# 힙

```javascript
class Heap {
  constructor(comp) {
    this.items = [];
    this.comp = comp;
  }

  get size() {
    return this.items.length;
  }

  swap(a, b) {
    const temp = this.items[a];
    this.items[a] = this.items[b];
    this.items[b] = temp;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  peak() {
    return this.items[0];
  }

  add(item) {
    let index = this.items.push(item) - 1;
    let parentIndex = this.getParentIndex(index);

    while (
      parentIndex >= 0 &&
      this.comp(this.items[index], this.items[parentIndex])
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  poll() {
    if (this.size < 2) return this.items.pop();

    const item = this.peak();
    this.items[0] = this.items.pop();

    let index = 0;
    let leftIndex = this.getLeftChildIndex(index);
    let rightIndex = this.getRightChildIndex(index);

    while (leftIndex < this.size) {
      const target =
        rightIndex < this.size &&
        this.comp(this.items[rightIndex], this.items[leftIndex])
          ? rightIndex
          : leftIndex;

      if (this.comp(this.items[index], this.items[target])) break;
      this.swap(index, target);

      index = target;
      leftIndex = this.getLeftChildIndex(index);
      rightIndex = this.getRightChildIndex(index);
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
