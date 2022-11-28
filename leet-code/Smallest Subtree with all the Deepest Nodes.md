# Smallest Subtree with all the Deepest Nodes

[LeetCode 문제 링크](https://leetcode.com/problems/squares-of-a-sorted-array)

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

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  const { node } = getDeepestSubtreeAndDepth(root, 1);
  return node;
}

function getDeepestSubtreeAndDepth(node: TreeNode | null, depth: number): { node: TreeNode | null; depth: number } {
  if (node === null) {
    return { node: null, depth };
  }

  const leftSubTree = getDeepestSubtreeAndDepth(node.left, depth + 1);
  const rightSubTree = getDeepestSubtreeAndDepth(node.right, depth + 1);

  if (leftSubTree.depth > rightSubTree.depth) {
    return leftSubTree;
  }
  if (leftSubTree.depth < rightSubTree.depth) {
    return rightSubTree;
  }

  return { node, depth: leftSubTree.depth };
}
```
