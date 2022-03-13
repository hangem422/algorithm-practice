# Cache

## LFU(최소 빈도 사용) 캐싱

```javascript
class LFUNode {
  constructor(key, val) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.data = val;
    this.freqCount = 1;
  }
}

class LFUDoublyLinkedList {
  constructor() {
    this.head = new LFUNode("buffer head", null);
    this.tail = new LFUNode("buffer tail", null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  insertAtHead(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size += 1;
  }

  removeAtTail() {
    const oldTail = this.tail.prev;
    if (oldTail !== this.head) {
      return this.removeNode(oldTail);
    }
    return null;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size -= 1;
  }
}

class LFUCache {
  constructor(capacity) {
    this.keys = new Map();
    this.freq = new Map();
    this.capacity = capacity;
    this.minFreq = 0;
  }

  set(key, val) {
    if (this.keys.has(key)) {
      const node = this.keys.get(key);
      node.data = val;
      this.#increaseFreqOf(node);
      this.#increaseMinFreq();
    } else {
      const node = this.#createLFUNode(key, val);
      this.#prepareFreqLinkedList(1);
      this.#makeSpaceForNewNode();
      this.#insertNodeAtFreqHead(node, 1);
      this.minFreq = 1;
    }
  }

  get(key) {
    const node = this.keys.get(key);
    if (node === undefined) {
      return null;
    }

    this.#increaseFreqOf(node);
    this.#increaseMinFreq();
    return node.data;
  }

  #increaseFreqOf(node) {
    const oldFreqCount = node.freqCount;
    node.freqCount += 1;

    this.#prepareFreqLinkedList(node.freqCount);
    this.freq.get(oldFreqCount).removeNode(node);
    this.freq.get(node.freqCount).insertAtHead(node);
  }

  #prepareFreqLinkedList(freq) {
    if (!this.freq.has(freq)) {
      this.freq.set(freq, new LFUDoublyLinkedList());
    }
  }

  #increaseMinFreq() {
    if (this.freq.get(this.minFreq).size === 0) {
      this.minFreq += 1;
    }
  }

  #createLFUNode(key, val) {
    const node = new LFUNode(key, val);
    this.keys.set(key, node);
    return node;
  }

  #makeSpaceForNewNode() {
    if (this.keys.size < this.capacity) {
      return;
    }

    const oldTail = this.freq.get(this.minFreq).removeAtTail();
    this.keys.delete(oldTail.key);
    this.size -= 1;
  }

  #insertNodeAtFreqHead(node, freq) {
    this.freq.get(freq).insertAtHead(node);
    this.size += 1;
  }
}
```

## LRU(가장 오래전 사용) 캐싱

```javascript
class LRUNode {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.keys = new Map();
    this.capacity = capacity;
    this.head = new LRUNode("buffer head", null);
    this.tail = new LRUNode("buffer tail", null);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addNode(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  get(key) {
    const node = this.keys.get(key);
    if (node === undefined) {
      return null;
    }

    this.removeNode(node);
    this.addNode(node);
    return node.data;
  }

  set(key, val) {
    if (node) {
      this.removeNode(node);
    } else if (this.keys.size === this.capacity) {
      const target = this.head.next;
      this.removeNode(target);
      this.keys.delete(target.key);
    }

    const newNode = new LRUNode(key, value);
    this.addNode(newNode);
    this.keys.set(key, newNode);
  }
}
```
