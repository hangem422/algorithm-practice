# Kth Ancestor of a Tree Node

[LeetCode 문제 링크](https://leetcode.com/problems/kth-ancestor-of-a-tree-node)

```javascript
/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
  const con = makeConnection(n, parent);
  this.ancs = makeAncs(n, con);
};

function makeConnection(n, parent) {
  const con = Array.from({ length: n }, () => []);
  for (let i = 1; i < parent.length; i += 1) {
    con[parent[i]].push(i);
  }

  return con;
}

function makeAncs(n, con) {
  const depth = Array(n);
  const ancs = Array.from({ length: n }, () => []);
  const stack = [];

  depth[0] = 0;
  con[0].forEach((node) => {
    stack.push([node, 0]);
  });

  while (stack.length) {
    const [cur, parent] = stack.pop();
    depth[cur] = depth[parent] + 1;
    ancs[cur][0] = parent;

    const ancLimit = Math.floor(Math.log2(depth[cur]));
    for (let i = 1; i <= ancLimit; i += 1) {
      const anc = ancs[cur][i - 1];
      ancs[cur][i] = ancs[anc][i - 1];
    }

    con[cur].forEach((node) => {
      stack.push([node, cur]);
    });
  }

  return ancs;
}

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  for (let pow = 0, bin = 1; bin <= k; pow += 1, bin *= 2) {
    if (this.ancs[node].length <= pow) {
      return -1;
    }
    if ((bin & k) > 0) {
      node = this.ancs[node][pow];
    }
  }

  return node;
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
```
