# Strongly Connect Component

1. 같은 SCC 내의 임의의 두 정점 A,B사이의 경로가 항상 존재한다. (A->B, B->A 존재)
2. 서로 다른 SCC에서 뽑은 임의의 두 점 A,B 사이의 경로 A->B로 가는 경로와 B->A로 가는 경로는 동시에 존재할 수 없다. (SCC 끼리는 사이클이 존재하지 않는다.)

## 1. 코사라주 알고리즘

1. DFS 순환을 통해 임의의 노드로부터 후위 순회 순서를 Stack에 쌓는다. 순회는 자신의 밑에 노드를 자신보다 앞에 넣는다. 그래프의 대표 노드(Root 노드)는 항상 가장 마지막에 쌓이게 된다.
2. 역방향 그래프로 미리 준비한 Stack의 윗부분 노드부터 쉰회를 시작한다. 역방향 그래프는 자신의 조상으로 가는 그래프이고, Stack에서 Pop 되는 순서는 대표 노드(Root 노드) 순이다. 대표 노드가 조상이 있다는 것은 순회가 이루어 진다는 뜻이다.

```javascript
function makeConnection(v, edges) {
  const con = Array.from({ length: v + 1 }, () => []);
  const recon = Array.from({ length: v + 1 }, () => []);

  edges.forEach(([org, dest]) => {
    con[org].push(dest);
    recon[dest].push(org);
  });

  return [con, recon];
}

function dfs(node, stack, con, visit) {
  con[node].forEach((next) => {
    if (visit[next]) return;
    visit[next] = true;
    dfs(next, stack, con, visit);
  });

  stack.push(node);
}

function makeStack(v, con) {
  const visit = Array(v + 1).fill(false);
  const stack = [];

  for (let node = 1; node <= v; node += 1) {
    if (visit[node]) continue;
    visit[node] = true;
    dfs(node, stack, con, visit);
  }

  return stack;
}

function makeSCC(v, stack, recon) {
  const visit = Array(v + 1).fill(false);
  const res = [];

  for (let i = stack.length - 1; i >= 0; i -= 1) {
    const node = stack[i];
    if (visit[node]) continue;

    const group = [];
    visit[node] = true;
    dfs(node, group, recon, visit);

    res.push(group);
  }

  return res;
}

const [V, E] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((str) => str.split(" ").map(Number));

const [con, recon] = makeConnection(V, edges);
const stack = makeStack(V, con);
const scc = makeSCC(V, stack, recon);

console.log(scc);
```
