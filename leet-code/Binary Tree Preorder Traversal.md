# Binary Tree Preorder Traversal

[LeetCode 문제 링크](https://leetcode.com/problems/binary-tree-preorder-traversal)

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

function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const values: number[] = [];
  const nodeStack: TreeNode[] = [root];

  while (nodeStack.length > 0) {
    const node = nodeStack.pop()!;
    values.push(node.val);

    if (node.right !== null) {
      nodeStack.push(node.right);
    }
    if (node.left !== null) {
      nodeStack.push(node.left);
    }
  }

  return values;
}
```
