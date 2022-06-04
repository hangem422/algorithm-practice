# Koko Eating Bananas

[LeetCode 문제 링크](https://leetcode.com/problems/koko-eating-bananas)

```javascript
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left <= right) {
    const bananasPerHour = Math.floor((left + right) / 2);
    const hour = calcTotalHour(bananasPerHour, piles);

    if (hour <= h) {
      right = bananasPerHour - 1;
    } else if (hour > h) {
      left = bananasPerHour + 1;
    } else {
      return bananasPerHour;
    }
  }

  return left;
};

function calcTotalHour(bananasPerHour, piles) {
  let hour = 0;
  piles.forEach((pile) => {
    hour += Math.ceil(pile / bananasPerHour);
  });

  return hour;
}
```
