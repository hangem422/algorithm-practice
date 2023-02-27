# LFU Cache

[LeetCode 문제 링크](https://leetcode.com/problems/lfu-cache/description)

```typescript
class LFUNode {
  prev: LFUNode | null;
  next: LFUNode | null;
  key: number;
  value: number;
  freqCount: number;

  constructor(key: number, value: number) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.value = value;
    this.freqCount = 1;
  }
}

class LFUDoublyLinkedList {
  head: LFUNode;
  tail: LFUNode;
  size: number;

  constructor() {
    this.head = new LFUNode(NaN, NaN);
    this.tail = new LFUNode(NaN, NaN);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  insertAtHead(node: LFUNode) {
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size += 1;
  }

  removeAtTail() {
    const oldTail = this.tail.prev;
    if (oldTail !== this.head) {
      this.removeNode(oldTail!);
      return oldTail;
    }
    return null;
  }

  removeNode(node: LFUNode) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    this.size -= 1;
  }
}

class LFUCache {
  keys: Map<number, LFUNode>;
  freq: Map<number, LFUDoublyLinkedList>;
  capacity: number;
  minFreq: number;

  constructor(capacity: number) {
    this.keys = new Map();
    this.freq = new Map();
    this.capacity = capacity;
    this.minFreq = 0;
  }

  public get(key: number): number {
    const node = this.keys.get(key);
    if (node === undefined) {
      return -1;
    }

    this.increaseFreqOf(node);
    this.increaseMinFreq();
    return node.value;
  }

  public put(key: number, value: number): void {
    if (this.keys.has(key)) {
      const node = this.keys.get(key)!;
      node.value = value;
      this.increaseFreqOf(node);
      this.increaseMinFreq();
    } else {
      const node = this.createLFUNode(key, value);
      this.prepareFreqLinkedList(1);
      this.makeSpaceForNewNode();
      this.insertNodeAtFreqHead(node, 1);
      this.minFreq = 1;
    }
  }

  private increaseFreqOf(node: LFUNode) {
    const oldFreqCount = node.freqCount;
    node.freqCount += 1;

    this.prepareFreqLinkedList(node.freqCount);
    this.freq.get(oldFreqCount)!.removeNode(node);
    this.freq.get(node.freqCount)!.insertAtHead(node);
  }

  private prepareFreqLinkedList(freq: number) {
    if (!this.freq.has(freq)) {
      this.freq.set(freq, new LFUDoublyLinkedList());
    }
  }

  private increaseMinFreq() {
    if (this.freq.get(this.minFreq)!.size === 0) {
      this.minFreq += 1;
    }
  }

  private createLFUNode(key: number, value: number) {
    const node = new LFUNode(key, value);
    this.keys.set(key, node);
    return node;
  }

  private makeSpaceForNewNode() {
    if (this.keys.size <= this.capacity) {
      return;
    }

    const oldTail = this.freq.get(this.minFreq)!.removeAtTail();
    this.keys.delete(oldTail!.key);
  }

  private insertNodeAtFreqHead(node: LFUNode, freq: number) {
    if (this.freq.has(freq)) {
      this.freq.get(freq)!.insertAtHead(node);
    }
  }
}
```
