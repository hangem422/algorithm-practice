# Strongly Connected Component

[백준 문제 링크](https://www.acmicpc.net/problem/2150)

Javascript에서는 재귀로 DFS를 구현해서는 **StackSizeExceeded**를 피할 수 없다. 그래서 유사 CallStack을 구현해서 해결했다. 이렇게까지 해야하나 싶다.

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function makeConnection(v, edges) {
  const con = Array.from({ length: v + 1 }, () => []);
  const recon = Array.from({ length: v + 1 }, () => []);

  edges.forEach(([org, dest]) => {
    con[org].push(dest);
    recon[dest].push(org);
  });

  return [con, recon];
}

function dfs(start, stack, con, visit) {
  const callStack = [[start, -1]];

  while (callStack.length) {
    const [node, index] = callStack.pop();
    const nextCnt = con[node].length;

    let nextIndex = index + 1;
    let nextNode = con[node][nextIndex];

    while (nextIndex < nextCnt && visit[nextNode]) {
      nextIndex += 1;
      nextNode = con[node][nextIndex];
    }

    if (nextIndex === nextCnt) {
      stack.push(node);
    } else {
      visit[nextNode] = true;
      callStack.push([node, nextIndex]);
      callStack.push([nextNode, -1]);
    }
  }
}

// function dfs(node, stack, con, visit) {
//   con[node].forEach((next) => {
//     if (visit[next]) return;
//     visit[next] = true;
//     dfs(next, stack, con, visit);
//   });

//   stack.push(node);
// }

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
console.log(stack);
const scc = makeSCC(V, stack, recon);

scc.forEach((group) => {
  group.sort((a, b) => a - b);
  group.push(-1);
});
scc.sort((a, b) => a[0] - b[0]);

const cnt = scc.length;
const paths = scc.map((group) => group.join(" ")).join("\n");

console.log(`${cnt}\n${paths}`);
```
