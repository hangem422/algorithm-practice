# Leaf-Similar Trees

[LeetCode 문제 링크](https://leetcode.com/problems/leaf-similar-trees)

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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const seq1 = getLeafValueSequence(root1);
  const seq2 = getLeafValueSequence(root2);
  return isSameSequence(seq1, seq2);
}

function getLeafValueSequence(node: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  const sequence: number[] = [];

  if (node !== null) {
    stack.push(node);
  }

  while (stack.length > 0) {
    const cur = stack.pop() as TreeNode;

    if (cur.left === null && cur.right === null) {
      sequence.push(cur.val);
      continue;
    }

    if (cur.right !== null) {
      stack.push(cur.right);
    }
    if (cur.left !== null) {
      stack.push(cur.left);
    }
  }

  return sequence;
}

function isSameSequence(seq1: number[], seq2: number[]): boolean {
  return seq1.length === seq2.length && seq1.every((value, index) => value === seq2[index]);
}
```
