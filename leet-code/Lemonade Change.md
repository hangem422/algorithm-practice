# Lemonade Change

[LeetCode 문제 링크](https://leetcode.com/problems/lemonade-change)

```javascript
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const cashes = [0, 0];
  return bills.every((bill) => {
    if (bill === 5) {
      cashes[0] += 1;
      return true;
    }

    if (bill === 10) {
      cashes[0] -= 1;
      cashes[1] += 1;
      return cashes[0] >= 0;
    }

    if (cashes[1] < 1) {
      cashes[0] -= 3;
      return cashes[0] >= 0;
    }

    cashes[0] -= 1;
    cashes[1] -= 1;
    return cashes[0] >= 0 && cashes[1] >= 0;
  });
};
```
