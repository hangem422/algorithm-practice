# Symmetric Tree

[LeetCode 문제 링크](https://leetcode.com/problems/symmetric-tree)

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  return root ? isSymmetricChildNode(root.left, root.right) : true;
}

function isSymmetricChildNode(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (node1 === null || node2 === null) {
    return node1 === null && node2 === null;
  }
  if (node1.val !== node2.val) {
    return false;
  }

  return isSymmetricChildNode(node1.left, node2.right) && isSymmetricChildNode(node1.right, node2.left);
}
```
