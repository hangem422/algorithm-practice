# Pairs of Songs With Total Durations Divisible by 60

[LeetCode 문제 링크](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60)

```javascript
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let count = 0;
  const mods = Array(60).fill(0);

  time.forEach((t) => {
    const cur = t % 60;
    const target = (60 - cur) % 60;
    count += mods[target];
    mods[cur] += 1;
  });

  return count;
};
```
