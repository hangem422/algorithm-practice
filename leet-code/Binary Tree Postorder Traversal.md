# Binary Tree Postorder Traversal

[LeetCode 문제 링크](https://leetcode.com/problems/binary-tree-postorder-traversal)

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

function postorderTraversal(root: TreeNode | null): number[] {
  const nodeStack: Array<TreeNode> = [];
  const values: number[] = [];

  if (root !== null) {
    nodeStack.push(root);
  }

  while (nodeStack.length > 0) {
    const node = nodeStack.pop()!;
    values.push(node.val);

    if (node.left !== null) {
      nodeStack.push(node.left);
    }
    if (node.right !== null) {
      nodeStack.push(node.right);
    }
  }

  return values.reverse();
}
```
