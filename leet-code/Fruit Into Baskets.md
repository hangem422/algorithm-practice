# Fruit Into Baskets

[LeetCode 문제 링크](https://leetcode.com/problems/fruit-into-baskets)

```typescript
function totalFruit(fruits: number[]): number {
  let from: number = 0;
  let to: number = fruits.findIndex((fruit) => fruit !== fruits[from]);
  let max = to - from + 1;

  while (to < fruits.length) {
    to = find(fruits, (fruit) => fruit !== fruits[from] && fruit !== fruits[to], to + 1);
    max = Math.max(max, to - from);

    const firstFrom = findReverse(fruits, (fruit) => fruit !== fruits[to], to - 1);
    from = findReverse(fruits, (fruit) => fruit !== fruits[firstFrom], firstFrom - 1) + 1;
  }

  return max;
}

function find(arr: number[], callback: (num: number) => boolean, from: number) {
  for (let i = from; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      return i;
    }
  }

  return arr.length;
}

function findReverse(arr: number[], callback: (num: number) => boolean, from: number) {
  for (let i = from; i >= 0; i -= 1) {
    if (callback(arr[i])) {
      return i;
    }
  }

  return -1;
}
```
