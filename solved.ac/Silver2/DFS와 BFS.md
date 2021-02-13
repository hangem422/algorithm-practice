# DFS와 BFS

[백준 문제 링크](https://www.acmicpc.net/problem/1260)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

class Graph {
  constructor(size) {
    this.edges = [...Array(size + 1)].map(() => ({}));
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1][vertex2] = true;
    this.edges[vertex2][vertex1] = true;
  }

  dfs(vertex) {
    const ans = [];
    const visit = Array(this.edges.length);
    const stack = [vertex];

    while (stack.length) {
      const v = stack.pop();
      if (visit[v]) continue;

      const neighbor = Object.keys(this.edges[v]).map(Number);
      for (let i = neighbor.length - 1; i >= 0; i -= 1) {
        stack.push(neighbor[i]);
      }

      ans.push(v);
      visit[v] = true;
    }

    return ans;
  }

  bfs(vertex) {
    const ans = [];
    const visit = Array(this.edges.length);
    const que = [vertex];

    while (que.length) {
      const v = que.shift();
      if (visit[v]) continue;

      const neighbor = Object.keys(this.edges[v]).map(Number);
      que.push(...neighbor);

      ans.push(v);
      visit[v] = true;
    }

    return ans;
  }
}

function solution() {
  const [n, m, v] = input[0].split(" ").map(Number);
  const graph = new Graph(n);

  for (let i = 1; i <= m; i += 1) {
    const [v1, v2] = input[i].split(" ").map(Number);
    graph.addEdge(v1, v2);
  }

  const dfs = graph.dfs(v).join(" ");
  const bfs = graph.bfs(v).join(" ");

  return `${dfs}\n${bfs}`;
}

console.log(solution());
```
