# Sum of Root To Leaf Binary Numbers

[백준 문제 링크](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers)

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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  return traversePreOreder(root, 0);
};

function traversePreOreder(node, parentValue) {
  if (node === null) {
    return 0;
  }

  const currentValue = (parentValue << 1) + node.val;
  let sum = 0;

  if (node.left) {
    sum += traversePreOreder(node.left, currentValue);
  }
  if (node.right) {
    sum += traversePreOreder(node.right, currentValue);
  }

  return sum || currentValue;
}
```
