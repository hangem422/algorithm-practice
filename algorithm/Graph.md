# 그래프

## 1. 지향성 그래프.

그래프의 노드는 1~n의 키를 가지고 있음

```javascript
class Graph {
  constructor(n) {
    this.size = n + 1;
    this.adj = Array.from({ length: this.size }, () => []);
  }

  addEdge(origin, dest, weight = 1) {
    this.adj[origin].push([dest, weight]);
  }

  bfs(source, func) {
    const visit = Array(this.size).fill(false);
    const queue = [source];

    while (queue.length) {
      const cur = queue.shift();
      func(cur);

      this.adj[cur].forEach((neighbor) => {
        if (visit[neighbor]) return;

        visit[neighbor] = true;
        queue.push(neighbor);
      });
    }
  }

  dfs(source, func) {
    const visit = Array(this.size).fill(false);
    const stack = [source];

    while (stack.length) {
      const cur = stack.pop();
      func(cur);

      this.adj.forEach((neighbor) => {
        if (visit[neighbor]) return;

        visit[neighbor] = true;
        stack.push(neighbor);
      });
    }
  }

  dijkstra(source) {
    const visit = Array(this.size).fill(false);
    const dist = Array(this.size).fill(Infinity);

    dist[source] = 0;

    while (true) {
      let minDist = Infinity;
      let minNode = null;

      for (let node = 1; node < this.size; node += 1) {
        if (!visit[node] && dist[node] < minDist) {
          minDist = dist[node];
          minNode = node;
        }
      }

      if (minNode === null) break;
      visit[minNode] = true;

      this.adj[minNode].forEach(([neighbor, weight]) => {
        const alt = minDist + weight;
        if (alt < dist[neighbor]) dist[neighbor] = alt;
      });
    }

    return dist;
  }

  bellmanFord(source) {
    const dist = Array(this.size).fill(Infinity);
    dist[source] = 0;

    for (let i = 1; i < this.size; i += 1) {
      for (let node = 1; node < this.size; node += 1) {
        if (isFinite(dist[node])) continue;

        this.adj[node].forEach(([neighbor, weight]) => {
          const alt = dist[node] + weight;
          if (alt < dist[neighbor]) dist[neighbor] = alt;
        });
      }
    }

    for (let node = 1; node < this.size; node += 1) {
      this.adj[node].forEach(([neighbor, weight]) => {
        if (dist[neighbor] > dist[cur] + weight) return null;
      });
    }

    return dist;
  }

  floyd() {
    const dist = Array.from({ length: this.size }, () =>
      Array(this.size).fill(Infinity)
    );

    for (let node = 1; node < this.size; node += 1) {
      dist[node][node] = 0;
      this.adj[node].forEach(([neighbor, weight]) => {
        dist[node][neighbor] = weight;
      });
    }

    for (let mid = 1; mid <= this.size; mid += 1) {
      for (let origin = 1; origin <= this.size; origin += 1) {
        if (origin === mid) continue;

        for (let dest = 1; dest <= this.size; dest += 1) {
          const alt = dist[origin][mid] + dist[mid][dest];
          if (alt < dist[origin][dest]) dist[origin][dest] = alt;
        }
      }
    }

    return dist;
  }

  topologicalSort() {
    const visit = Array(this.size).fill(false);
    const stack = [];

    const topologicalSortUtil = (node) => {
      visit[node] = true;
      this.adj[node].forEach(([neighbor]) => {
        if (!visit[neighbor]) topologicalSortUtil(neighbor);
      });

      stack.push(node);
    };

    for (let node = 1; node < this.size; node += 1) {
      if (!visit[node]) topologicalSortUtil(node);
    }

    return stack.reverse();
  }
}
```

### Heap과 함께 다익스트라를 사용했을 경우

[Heap 알고리즘 구현 보기](./Heap.md)

```javascript
  dijkstra(source) {
    const = Array(this.size + 1);
    const heap = new Heap((a, b) => a[1] < b[1]);

    heap.add([source, 0]);

    while (heap.size) {
      const [minNode, minDist] = heap.poll();

      if (dist[minNode] !== undefined) continue;
      dist[minNode] = minDist;

      this.adj[minNode].forEach(([neighbor, weight]) => {
        if (dist[neighbor] !== undefined) return;
        const alt = minDist + weight;
        heap.add([neighbor, alt]);
      })
    }

    return dist;
  }
```

### 선행을 반드시 완료해야하는 위상 정렬

```javascript
  topologicalSort() {
    const indegree = Array(this.size).fill(0);
    const stack = [];
    const res = [];

    for (let i = 1; i < this.size; i += 1) {
      this.adj[i].forEach(([node]) => {
        indegree[node] += 1;
      });
    }

    indegree.forEach((cnt, node) => {
      if (cnt === 0) stack.push(node);
    });

    while (stack.length) {
      const node = stack.pop();
      res.push(node);

      this.adj[node].forEach((neighbor) => {
        indegree[neighbor] -= 1;
        if (indegree[neighbor] === 0) stack.push(neighbor);
      });
    }

    return res;
  }
```
