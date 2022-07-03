# Queue Reconstruction by Height

[LeetCode 문제 링크](https://leetcode.com/problems/queue-reconstruction-by-height)

```javascript
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  const queue = Array(people.length).fill(null);
  people.forEach((person) => {
    let preCount = person[1];
    const idx = queue.findIndex((item) => {
      if (item !== null) {
        return false;
      }
      preCount -= 1;
      return preCount === -1;
    });
    queue[idx] = person;
  });
  return queue;
};
```
