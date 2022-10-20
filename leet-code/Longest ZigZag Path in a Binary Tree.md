# Longest ZigZag Path in a Binary Tree

[LeetCode 문제 링크](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree)

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

function longestZigZag(root: TreeNode | null): number {
  const { max } = getNumberOfVistedNode(root);
  return max - 1;
}

const getNumberOfVistedNode = (node: TreeNode | null): { left: number; right: number; max: number } => {
  if (node === null) {
    return { left: 0, right: 0, max: 0 };
  }

  const fromLeftChild = getNumberOfVistedNode(node.left);
  const fromRightChild = getNumberOfVistedNode(node.right);
  const left = fromLeftChild.right + 1;
  const right = fromRightChild.left + 1;
  const max = Math.max(fromLeftChild.max, fromRightChild.max, right, left);

  return { left, right, max };
};
```
