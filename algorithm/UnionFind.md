# 유니온 파인드

```javascript
class UnionFind {
  constructor(size) {
    this.parents = Array.from({ length: size + 1 }, (_, i) => i);
  }

  find(node) {
    if (this.parents[node] === node) return node;

    const parent = this.find(this.parents[node]);
    this.parents[node] = parent;

    return parent;
  }

  union(node1, node2) {
    const parent1 = this.find(node1);
    const parent2 = this.find(node2);

    this.parents[parent2] = parent1;
  }
}
```
