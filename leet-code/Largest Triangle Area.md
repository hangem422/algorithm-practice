# Largest Triangle Area

[LeetCode 문제 링크](https://leetcode.com/problems/maximum-units-on-a-truck)

```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  const pointCount = points.length;
  let max = 0;

  for (let first = 0; first < pointCount; first += 1) {
    for (let second = first + 1; second < pointCount; second += 1) {
      for (let third = second + 1; third < pointCount; third += 1) {
        const area = getTriangleArea(...points[first], ...points[second], ...points[third]);
        max = Math.max(max, area);
      }
    }
  }

  return max;
};

function getTriangleArea(x1, y1, x2, y2, x3, y3) {
  const num = (y3 - y2) * x1 + -(x3 - x2) * y1 - x2 * y3 + x3 * y2;
  return Math.abs(num) / 2;
}
```
