# Merge Two Binary Trees

[LeetCode 문제 링크](https://leetcode.com/problems/merge-two-binary-trees)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null;
  }

  const resRoot = new TreeNode();
  const stack = [[resRoot, root1, root2]];

  while (stack.length) {
    const [resNode, node1, node2] = stack.pop();
    resNode.val = mergeNodeValue(node1, node2);

    if (node1?.left || node2?.left) {
      resNode.left = new TreeNode();
      stack.push([resNode.left, node1?.left, node2?.left]);
    }
    if (node1?.right || node2?.right) {
      resNode.right = new TreeNode();
      stack.push([resNode.right, node1?.right, node2?.right]);
    }
  }

  return resRoot;
};

function mergeNodeValue(node1, node2) {
  return (node1?.val ?? 0) + (node2?.val ?? 0);
}
```
