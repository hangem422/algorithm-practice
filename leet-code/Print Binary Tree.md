# Print Binary Tree

[LeetCode 문제 링크](https://leetcode.com/problems/print-binary-tree)

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
 * @return {string[][]}
 */
var printTree = function (root) {
  const height = calcHeight(root, 0);
  const m = height + 1;
  const n = 2 ** (height + 1) - 1;
  const res = Array.from({ length: m }, () => Array(n).fill(""));
  const stack = [[root, 0, (n - 1) / 2]];

  while (stack.length) {
    const [node, row, col] = stack.pop();
    res[row][col] = node.val + "";

    if (node.left) {
      stack.push([node.left, row + 1, col - 2 ** (height - row - 1)]);
    }
    if (node.right) {
      stack.push([node.right, row + 1, col + 2 ** (height - row - 1)]);
    }
  }

  return res;
};

function calcHeight(node, height) {
  if (node === null) {
    return height - 1;
  }

  return Math.max(calcHeight(node.left, height + 1), calcHeight(node.right, height + 1));
}
```
