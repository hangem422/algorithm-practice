# Find if Path Exists in Graph

[LeetCode 문제 링크](https://leetcode.com/problems/find-if-path-exists-in-graph)

```typescript
class UnionFind {
  private parents: Array<number>;

  constructor(size: number) {
    this.parents = Array.from({ length: size + 1 }, (_, i) => i);
  }

  public find(node: number): number {
    if (this.parents[node] === node) {
      return node;
    }

    const parent = this.find(this.parents[node]);
    this.parents[node] = parent;

    return parent;
  }

  public union(node1: number, node2: number) {
    const parent1 = this.find(node1);
    const parent2 = this.find(node2);

    this.parents[parent2] = parent1;
  }
}

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const uunionFind = new UnionFind(n);
  edges.forEach(([node1, node2]) => uunionFind.union(node1, node2));
  return uunionFind.find(source) === uunionFind.find(destination);
}
```
