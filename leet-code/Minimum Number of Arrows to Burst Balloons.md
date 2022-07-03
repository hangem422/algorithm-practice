# Minimum Number of Arrows to Burst Balloons

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons)

```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  let count = 1;
  let endMin = points[0][1];
  for (let i = 1; i < points.length; i += 1) {
    if (points[i][0] > endMin) {
      count += 1;
      endMin = points[i][1];
    } else {
      endMin = Math.min(endMin, points[i][1]);
    }
  }

  return count;
};
```
