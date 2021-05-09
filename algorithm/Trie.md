# 접두사 트리 (Trie)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

class TrieNode {
  children = new Map();
  endOfWord = 0;
}

class Trie {
  root = new TrieNode();

  insert(word) {
    let cur = this.root;

    for (let i = 0, l = word.length; i < l; i += 1) {
      if (!cur.children.has(word[i])) cur.children.set(word[i], new TrieNode());
      cur = cur.children.get(word[i]);
    }

    cur.endOfWord += 1;
  }

  search(word) {
    let cur = this.root;

    for (let i = 0, l = word.length; i < l; i += 1) {
      if (!cur.children.has(word[i])) return false;
      cur = cur.children.get(word[i]);
    }

    return cur.endOfWord > 0;
  }

  delete(word, cur = this.root, index = 0) {
    if (index === word.length) {
      if (cur.endOfWord > 0) cur.endOfWord -= 1;
      return cur.endOfWord === 0;
    }

    if (!cur.children.has(word[index])) return false;

    const node = cur.children.get(word[index]);
    const res = this.delete(word, node, index + 1);
    if (res) cur.children.delete(word[index]);

    return cur.children.size === 0;
  }
}
```
