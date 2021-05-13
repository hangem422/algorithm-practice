# 그래프

## 1. 지향성 그래프

Vertex의 Key 값으로 순차적인 숫자가 아닌 어떤것이 쓰여도 상관 없도록, Map을 사용해서 만들었다. Vertext의 Key가 순차적인 숫자일 경우 배열을 사용하여 최적화 하는 것이 속도가 빠르다.

```javascript
class Graph {
  constructor() {
    this.edges = new Map();
  }

  addVertex(ver) {
    if (this.edges.has(ver)) return;
    this.edges.set(ver, new Map());
  }

  addEdge(origin, dest, weight) {
    if (!this.edges.has(origin)) this.addVertex(origin);
    if (!this.edges.has(dest)) this.addVertex(dest);

    this.edges.get(origin).set(dest, weight);
  }

  removeEdge(origin, dest) {
    if (!this.edges.has(origin)) return;
    this.edges.get(origin).delete(dest);
  }

  removeVertex(ver) {
    if (this.edges.has(ver)) this.edges.delete(ver);
    this.edges.forEach((map) => {
      if (map.has(ver)) map.delete(ver);
    });
  }

  bfs(ver, func) {
    if (!this.edges.has(ver)) return;

    const visited = Array(this.edges.size);
    let list = [ver];

    while (list.length > 0) {
      const temp = [];

      for (let i = 0; i < list.length; i += 1) {
        const cur = list[i];

        if (visited[cur]) continue;
        visited[cur] = true;
        func(ver);

        this.edges.get(cur).forEach((_, dest) => {
          temp.push(dest);
        });
      }

      list = temp;
    }
  }

  dfs(ver, func) {
    if (!this.edges.has(ver)) return;

    const visited = Array(this.edges.size);
    const stack = [ver];

    while (stack.length > 0) {
      const cur = stack.pop();
      visited[cur] = true;
      func();

      this.edges.get(cur).forEach((_, dest) => {
        if (!visited[dest]) stack.push(dest);
      });
    }
  }

  dijkstra(source) {
    if (!this.edges.has(source)) return null;

    const notVisited = new Map();
    const dist = new Map();

    this.edges.forEach((_, ver) => {
      dist.set(ver, Infinity);
      notVisited.set(true);
    });

    dist.set(source, 0);

    while (notVisited.size > 0) {
      let minDist = Infinity;
      let minDistVer = null;

      notVisited.forEach((_, ver) => {
        if (dist.get(ver) < minDist) {
          minDist = dist.get(ver);
          minDistVer = ver;
        }
      });

      notVisited.delete(minDistVer);

      this.edges.get(minDistVer).forEach((_, neighbor) => {
        const alt = minDist + this.edges.get(minDistVer).get(neighbor);
        if (alt < dist.get(neighbor)) dist.set(neighbor, alt);
      });
    }
  }

  bellmanFord(source) {
    if (!this.edges.has(source)) return null;

    const dist = new Map();

    this.edges.forEach((_, ver) => dist.set(ver, Infinity));
    dist.set(source, 0);

    for (let i = 0; i < this.edges.size; i += 1) {
      this.edges.forEach((map, cur) => {
        if (isFinite(dist.get(cur))) {
          map.forEach((weight, next) => {
            const alt = Math.min(dist.get(next), dist.get(cur) + weight);
            dist.set(next, alt);
          });
        }
      });
    }

    for (const [cur, map] of this.edges.entries()) {
      for (const [next, weight] of map.entries()) {
        if (dist.get(next) > dist.get(cur) + weight) return null;
      }
    }

    return dist;
  }

  floyd() {
    const dist = new Map();
    const distChild = new Map();

    for (const key of this.edges.keys()) {
      distChild.set(key, Infinity);
    }

    this.edges.forEach((map, origin) => {
      const curChild = new Map(distChild);
      curChild.set(origin, 0);
      map.forEach((weight, dest) => {
        curChild.set(dest, weight);
      });

      dist.set(origin, curChild);
    });

    for (const k of this.edges.keys()) {
      dist.forEach((child, i) => {
        if (k === i) return;

        child.forEach((cur, j) => {
          const alt = Math.min(cur, dist.get(i).get(k) + dist.get(k).get(j));
          dist.get(i).set(j, alt);
        });
      });
    }

    return dist;
  }

  topologicalSort() {
    const visited = new Map();
    const stack = [];

    const topologicalSortUtil = (node) => {
      visited.set(node, true);
      for (const dest of this.edges.get(node).keys()) {
        if (!visited.has(dest)) topologicalSortUtil(dest);
      }

      stack.push(node);
    };

    for (const node of this.edges.keys()) {
      if (!visited.has(node)) topologicalSortUtil(node);
    }

    return stack.reverse();
  }
}
```

### Heap과 함께 다익스트라를 사용했을 경우

```javascript
  dijkstra(source) {
    if (!this.edges.has(source)) return null;

    const dist = new Map();
    const heap = new Heap((a, b) => a[1] < b[1]);

    this.edges.forEach((_, ver) => dist.set(ver, Infinity));
    dist.set(source, 0);
    heap.add([source, 0]);

    while (heap.size > 0) {
      const [minVer, minDist] = heap.poll();

      this.edges.get(minVer).forEach((weight, neighbor) => {
        const alt = minDist + weight;
        if (dist.get(neighbor) > alt) {
          dist.set(neighbor, alt);
          heap.add([neighbor, alt]);
        }
      });
    }

    return dist;
  }
```

### 선행을 반드시 완료해야하는 위상 정렬

```javascript
  topologicalSort() {
    const indegree = new Map();
    const queue = [];
    const res = [];

    for (const dests of this.edges.values()) {
      for (const dest of dests.keys()) {
        const alt = indegree.get(dest) || 0;
        indegree.set(dest, alt);
      }
    }

    indegree.forEach((cnt, key) => {
      if (cnt === 0) queue.push(key);
    });

    while (queue.length > 0) {
      const cur = queue.pop();
      res.push(cur);

      for (const next of this.edges.get(cur).keys()) {
        const alt = indegree.get(next) - 1;
        indegree.set(next, alt);
        if (alt === 0) queue.push(next);
      }
    }

    return res;
  }
```
