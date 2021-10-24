# 최소 공통 조상

```javascript
class LCATree {
  constructor(n, edges) {
    this.adj = Array.from({ length: n + 1 }, () => []);
    this.depth = Array(n + 1).fill(-1, 0, 1);
    this.ancs = Array.from({ length: n + 1 }, () => []);

    edges.forEach(([node1, node2]) => {
      this.adj[node1].push(node2);
      this.adj[node2].push(node1);
    });

    const stack = [[1, 0]];

    while (stack.length) {
      const [cur, parent] = stack.pop();

      this.depth[cur] = this.depth[parent] + 1;
      this.ancs[cur][0] = parent;

      const ancLimit = Math.floor(Math.log2(this.depth[cur]));
      for (let i = 1; i <= ancLimit; i += 1) {
        const anc = this.ancs[cur][i - 1];
        this.ancs[cur][i] = this.ancs[anc][i - 1];
      }

      this.adj[cur].forEach((node) => {
        if (node !== parent) stack.push([node, cur]);
      });
    }
  }

  compareDepth(node1, node2) {
    return this.depth[node1] - this.depth[node2];
  }

  GetCloseAnc(node, target) {
    let left = 0;
    let right = this.ancs[node].length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const comp = this.compareDepth(this.ancs[node][mid], target);

      if (comp === 0) return this.ancs[node][mid];
      if (comp > 0) left = mid + 1;
      else right = mid - 1;
    }

    return this.ancs[node][right];
  }

  lca(a, b) {
    let [deep, shallow] = this.depth[a] < this.depth[b] ? [b, a] : [a, b];
    while (this.compareDepth(deep, shallow) !== 0) {
      console.log(a, b);
      deep = this.GetCloseAnc(deep, shallow);
    }

    while (deep !== shallow) {
      for (let i = this.ancs[deep].length - 1; i >= 0; i -= 1) {
        if (this.ancs[deep][i] !== this.ancs[shallow][i]) {
          deep = this.ancs[deep][i];
          shallow = this.ancs[shallow][i];
          break;
        }
      }

      deep = this.ancs[deep][0];
      shallow = this.ancs[shallow][0];
    }

    return deep;
  }
}
```
