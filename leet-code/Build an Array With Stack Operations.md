# Build an Array With Stack Operations

[LeetCode 문제 링크](https://leetcode.com/problems/build-an-array-with-stack-operations)

```javascript
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const ans = [];
  let targetIndex = 0;

  for (let i = 1; i <= n && targetIndex < target.length; i += 1) {
    ans.push("Push");
    if (target[targetIndex] === i) {
      targetIndex += 1;
    } else {
      ans.push("Pop");
    }
  }

  return ans;
};
```
