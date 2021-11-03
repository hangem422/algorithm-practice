# 힙

## 1. Class 구현하기

```javascript
class Heap {
  #items;
  #compare;

  static getParentIndexOf(index) {
    return Math.floor((index - 1) / 2);
  }

  static getLeftChildIndexOf(index) {
    return index * 2 + 1;
  }

  static getRightChildIndexOf(index) {
    return index * 2 + 2;
  }

  constructor(compare) {
    this.#items = [];
    this.#compare = compare;
  }

  get size() {
    return this.#items.length;
  }

  peak() {
    return this.#items[0];
  }

  add(item) {
    let current = this.#items.push(item) - 1;
    let parent = Heap.getParentIndexOf(current);

    while (this.hasHigherPriority(current, parent)) {
      this.#swap(current, parent);
      current = parent;
      parent = Heap.getParentIndexOf(current);
    }
  }

  hasHigherPriority(index, comparisonTargetIndex) {
    if (this.isValidIndex(index) && this.isValidIndex(comparisonTargetIndex)) {
      return this.#compare(this.#items[index], this.#items[comparisonTargetIndex]);
    }

    return false;
  }

  isValidIndex(index) {
    return index >= 0 && index < this.size;
  }

  #swap(index1, index2) {
    const temp = this.#items[index1];
    this.#items[index1] = this.#items[index2];
    this.#items[index2] = temp;
  }

  poll() {
    if (this.size < 2) {
      return this.#items.pop();
    }

    const item = this.#shift();
    let current = 0;

    while (this.isValidIndex(Heap.getLeftChildIndexOf(current))) {
      const higherPriorityChild = this.getHigherPriorityChildIndexOf(current);
      if (this.hasHigherPriority(current, higherPriorityChild)) {
        break;
      }

      this.#swap(current, higherPriorityChild);
      current = higherPriorityChild;
    }

    return item;
  }

  #shift() {
    const item = this.peak();
    this.#items[0] = this.#items.pop();

    return item;
  }

  getHigherPriorityChildIndexOf(index) {
    const left = Heap.getLeftChildIndexOf(index);
    const right = Heap.getRightChildIndexOf(index);

    if (this.hasHigherPriority(right, left)) {
      return right;
    }

    return left;
  }
}
```

## 2. 인스턴스 생성

#### 최대 힙

```javascript
const heap = new Heap((a, b) => a > b);
heap.add(1);
heap.add(3);
heap.add(2);

const max = heap.poll();
console.log(max); // 3
```

#### 최소 힙

```javascript
const heap = new Heap((a, b) => a < b);
heap.add(3);
heap.add(1);
heap.add(2);

const min = heap.poll();
console.log(min); // 1
```
