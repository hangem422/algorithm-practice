# KCM Travel

[백준 문제 링크](https://www.acmicpc.net/problem/10217)

백준에서 Node.js는 메모리를 생각보다 많이 사용한다. C++ 코드보다 많은 조건을 추가하여 반복 횟수를 줄이는게 좋다.

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

class Data {
  constructor(dest, cost, time) {
    this.dest = dest;
    this.cost = cost;
    this.time = time;
  }
}

class Heap {
  constructor(comp) {
    this.items = [];
    this.comp = comp;
  }

  get size() {
    return this.items.length;
  }

  swap(a, b) {
    const temp = this.items[a];
    this.items[a] = this.items[b];
    this.items[b] = temp;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  peak() {
    return this.items[0];
  }

  add(item) {
    let index = this.items.push(item) - 1;
    let parentIndex = this.getParentIndex(index);

    while (
      parentIndex >= 0 &&
      this.comp(this.items[index], this.items[parentIndex])
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  poll() {
    if (this.size < 2) return this.items.pop();

    const item = this.peak();
    this.items[0] = this.items.pop();

    let index = 0;
    let leftIndex = this.getLeftChildIndex(index);
    let rightIndex = this.getRightChildIndex(index);

    while (leftIndex < this.size) {
      const target =
        rightIndex < this.size &&
        this.comp(this.items[rightIndex], this.items[leftIndex])
          ? rightIndex
          : leftIndex;

      if (this.comp(this.items[index], this.items[target])) break;
      this.swap(index, target);

      index = target;
      leftIndex = this.getLeftChildIndex(index);
      rightIndex = this.getRightChildIndex(index);
    }

    return item;
  }
}

const dp = Array.from(Array(101), () => Array(10001));

function initDp(n, m) {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 0; j <= m; j += 1) {
      dp[i][j] = Infinity;
    }
  }
  dp[1][0] = 0;
}

function solution() {
  const t = +input[0];
  let ans = "";

  for (let i = 0, j = 1; i < t; i += 1) {
    const [n, m, k] = input[j].split(" ").map(Number);
    const edges = Array.from(Array(n + 1), () => []);
    const heap = new Heap((a, b) => a.time < b.time);

    for (let z = j + 1, l = z + k; z < l; z += 1) {
      const [u, v, c, d] = input[z].split(" ").map(Number);
      edges[u].push(new Data(v, c, d));
    }

    initDp(n, m);
    heap.add(new Data(1, 0, 0));

    while (heap.size > 0) {
      const cur = heap.poll();
      if (cur.time > dp[cur.dest][cur.cost]) continue;

      edges[cur.dest].forEach((item) => {
        const nextCost = item.cost + cur.cost;
        const nextTime = item.time + cur.time;

        if (dp[item.dest][nextCost] > nextTime && nextCost <= m) {
          heap.add(new Data(item.dest, nextCost, nextTime));
          for (let z = nextCost; z <= m; z += 1) {
            if (nextTime >= dp[item.dest][z]) break;
            dp[item.dest][z] = nextTime;
          }
        }
      });
    }

    if (isFinite(dp[n][m])) ans += `${dp[n][m]}\n`;
    else ans += "Poor KCM\n";

    j += k + 1;
  }

  return ans;
}

console.log(solution());
```
