# Maximum Units on a Truck

[LeetCode 문제 링크](https://leetcode.com/problems/maximum-units-on-a-truck)

```javascript
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let units = 0;
  boxTypes
    .sort((a, b) => b[1] - a[1])
    .every(([numberOfBoxes, numberOfUnitsPerBox]) => {
      let cnt = Math.min(numberOfBoxes, truckSize);
      units += cnt * numberOfUnitsPerBox;
      truckSize -= cnt;
      return truckSize > 0;
    });

  return units;
};
```
