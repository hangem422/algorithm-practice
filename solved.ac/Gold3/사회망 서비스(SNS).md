# 사회망 서비스(SNS)

[백준 문제 링크](https://www.acmicpc.net/problem/2533)

정말 Javascript로 백준 문제를 푸는걸 그만둬야하나 생각하게 만든 문제다. 이 문제도 Javascript로는 정상적인 DFS를 이용해서 절대 풀 수 없다. 그래서 다음과 같이 변형했다.

1. **StackSizeExceeded** 때문에 DFS를 사용할 수 없다. Node들을 Depth의 오름차순으로 정렬한 다음, 최하위 Dpeth의 Node부터 차례대로 연산했다.
2. 그래도 **메모리 초과**를 피할 수 없다. 그래서 모든 함수를 없애고, 전역 코드로 구현했다. 함수 선언으로 생성되는 함수 객체와 prototype 객체를 없애면 효과가 있을까 해서 시도해봤는데 성공적이였다.

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

class Node {
  constructor(node, parent) {
    this.node = node;
    this.parent = parent;
  }
}

const n = +input[0];
const root = 1;
const arrFrom = { length: n + 1 };

const con = Array.from(arrFrom, () => []);

for (let i = 1; i < n; i += 1) {
  const [node1, node2] = input[i].split(" ");
  con[node1].push(node2);
  con[node2].push(node1);
}

const visit = Array(n + 1).fill(false);
const tree = [new Node(root, 0)];

for (i = 0; i < tree.length; i += 1) {
  const cur = tree[i];
  visit[cur.node] = true;

  con[cur.node].forEach((child) => {
    if (visit[child]) return;
    tree[tree.length] = new Node(child, cur.node);
  });
}

const matrix = Array.from(arrFrom, () => [0, 1]);

for (let i = tree.length - 1; i > 0; i -= 1) {
  const node = tree[i];

  matrix[node.parent][0] += matrix[node.node][1];
  matrix[node.parent][1] += Math.min(
    matrix[node.node][0],
    matrix[node.node][1]
  );
}

console.log(Math.min(...matrix[root]));
```
