# 2-SAT - 3

[백준 문제 링크](https://www.acmicpc.net/problem/11280)

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function solution() {
  let n, m, numCount;
  let sections;
  let connection, reverseConnection;
  let stack;
  let group;
  let res;

  parseInput();
  makeConnection();
  makeStack();
  makeGroup();
  validateResult();
  print();

  function parseInput() {
    [n, m] = input[0].split(" ").map(Number);
    numCount = (n << 1) + 1;
    sections = input.slice(1, 1 + m).map((line) => line.split(" ").map(Number));
  }

  function makeConnection() {
    connection = Array.from({ length: numCount + 1 }, () => []);
    reverseConnection = Array.from({ length: numCount + 1 }, () => []);

    sections.forEach(([a, b]) => {
      a = a > 0 ? toTrue(a) : toFlase(-a);
      b = b > 0 ? toTrue(b) : toFlase(-b);
      connection[toNot(a)].push(b);
      connection[toNot(b)].push(a);
      reverseConnection[b].push(toNot(a));
      reverseConnection[a].push(toNot(b));
    });
  }

  function toNot(num) {
    return num ^ 1;
  }

  function toTrue(num) {
    return num << 1;
  }

  function toFlase(num) {
    return (num << 1) | 1;
  }

  function makeStack() {
    const visit = Array(numCount + 1);
    stack = [];

    for (let num = 2; num <= numCount; num += 1) {
      if (!visit[num]) {
        visit[num] = true;
        connectionDfs(num, visit);
      }
    }
  }

  function connectionDfs(num, visit) {
    connection[num].forEach((next) => {
      if (!visit[next]) {
        visit[next] = true;
        connectionDfs(next, visit);
      }
    });

    stack.push(num);
  }

  function makeGroup() {
    let id = 1;
    group = Array(numCount + 1);

    for (let i = stack.length - 1; i >= 0; i -= 1) {
      const num = stack[i];
      if (group[num] === undefined) {
        group[num] = id;
        makeGroupDfs(num, id);
        id += 1;
      }
    }
  }

  function makeGroupDfs(num, id) {
    reverseConnection[num].forEach((next) => {
      if (group[next] === undefined) {
        group[next] = id;
        makeGroupDfs(next, id);
      }
    });
  }

  function validateResult() {
    for (let num = 1; num <= n; num += 1) {
      const numTrue = toTrue(num);
      const numFalse = toFlase(num);
      if (group[numTrue] === group[numFalse]) {
        res = false;
        return;
      }
    }
    res = true;
  }

  function print() {
    console.log(res ? 1 : 0);
  }
}

solution();
```
