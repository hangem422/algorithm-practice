# 2-SAT.md

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function solution() {
  const { n, sections, variableCount } = parseInput();
  const { connection, reverseConnection } = makeConnection(sections, variableCount);
  const topologicalSort = makeTopologicalSort(connection, variableCount);
  const group = decideGroup(reverseConnection, topologicalSort, variableCount);
  const res = validateResult(n, group);
  printResult(res);
}

function parseInput() {
  const [n, m] = input[0].split(" ").map(Number);
  const sections = input.slice(1, 1 + m).map((line) => line.split(" ").map(Number));
  const variableCount = (n << 1) + 1;
  return { n, m, sections, variableCount };
}

function makeConnection(sections, variableCount) {
  const connection = Array.from({ length: variableCount + 1 }, () => []);
  const reverseConnection = Array.from({ length: variableCount + 1 }, () => []);
  sections.forEach(([a, b]) => {
    a = a > 0 ? toTrue(a) : toFalse(-a);
    b = b > 0 ? toTrue(b) : toFalse(-b);
    connection[not(a)].push(b);
    connection[not(b)].push(a);
    reverseConnection[b].push(not(a));
    reverseConnection[a].push(not(b));
  });
  return { connection, reverseConnection };
}

function not(variable) {
  return variable ^ 1;
}

function toTrue(variable) {
  return variable << 1;
}

function toFalse(variable) {
  return (variable << 1) | 1;
}

function makeTopologicalSort(connection, variableCount) {
  const visit = Array(variableCount + 1);
  const topologicalSort = [];
  for (let variable = 2; variable <= variableCount; variable += 1) {
    if (!visit[variable]) {
      makeTopologicalSortUnit(variable, visit, topologicalSort, connection);
    }
  }
  return topologicalSort;
}

function makeTopologicalSortUnit(current, visit, topologicalSort, connection) {
  visit[current] = true;
  connection[current].forEach((next) => {
    if (!visit[next]) {
      makeTopologicalSortUnit(next, visit, topologicalSort, connection);
    }
  });
  topologicalSort.push(current);
}

function decideGroup(reverseConnection, topologicalSort, variableCount) {
  const group = Array(variableCount + 1);
  for (let i = topologicalSort.length - 1; i >= 0; i -= 1) {
    const variable = topologicalSort[i];
    if (group[variable] === undefined) {
      decideGroupUnit(variable, i, group, reverseConnection);
    }
  }
  return group;
}

function decideGroupUnit(current, id, group, reverseConnection) {
  group[current] = id;
  reverseConnection[current].forEach((next) => {
    if (group[next] === undefined) {
      decideGroupUnit(next, id, group, reverseConnection);
    }
  });
}

function validateResult(n, group) {
  for (let num = 1; num <= n; num += 1) {
    const numTrue = toTrue(num);
    const numFalse = toFalse(num);
    if (group[numTrue] === group[numFalse]) {
      return false;
    }
  }
  return true;
}

function printResult(res) {
  console.log(res ? 1 : 0);
}

solution();
```
