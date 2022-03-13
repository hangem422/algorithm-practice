# LRU Cache

[LeetCode 문제 링크](https://leetcode.com/problems/lru-cache)

```javascript
var LRUNode = function (key, data) {
  this.key = key;
  this.data = data;
  this.next = null;
  this.prev = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.keys = new Map();
  this.capacity = capacity;
  this.head = new LRUNode("buffer head", null);
  this.tail = new LRUNode("buffer tail", null);

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.addNode = function (node) {
  node.prev = this.tail.prev;
  node.next = this.tail;
  this.tail.prev.next = node;
  this.tail.prev = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.keys.get(key);
  if (node === undefined) {
    return -1;
  }

  this.removeNode(node);
  this.addNode(node);
  return node.data;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.keys.get(key);
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
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```
