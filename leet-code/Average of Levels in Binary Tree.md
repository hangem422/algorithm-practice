# Average of Levels in Binary Tree

[LeetCode 문제 링크](https://leetcode.com/problems/average-of-levels-in-binary-tree)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const stack = [root];
  const res = [];

  let left = 0;
  let right = 1;

  while (left < right) {
    let sum = 0;

    for (let i = left; i < right; i += 1) {
      const node = stack[i];
      sum += node.val;

      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }

    res.push(sum / (right - left));
    left = right;
    right = stack.length;
  }

  return res;
};
```
