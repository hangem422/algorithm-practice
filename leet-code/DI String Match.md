# DI String Match

[LeetCode 문제 링크](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers)

```javascript
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const output = [0];
  let min = 0;
  let max = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] == "I") {
      max += 1;
      output.push(max);
    } else {
      min -= 1;
      output.push(min);
    }
  }

  return output.map((num) => num - min);
};
```
