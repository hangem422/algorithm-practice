# Path Sum II

[LeetCode 문제 링크](https://leetcode.com/problems/path-sum-ii)

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

function pathSum(root: TreeNode | null, targetSum: number, stack: number[] = []): number[][] {
  if (root === null) {
    // Nil Node
    return [];
  }

  let result: number[][] = [];
  const nextTargetSum = targetSum - root.val;
  stack.push(root.val);

  if (root.left === null && root.right === null) {
    // Leaf Node
    result = nextTargetSum === 0 ? [[...stack]] : [];
  } else {
    // Noraml Node
    result = [...pathSum(root.left, nextTargetSum, stack), ...pathSum(root.right, nextTargetSum, stack)];
  }

  stack.pop();
  return result;
}
```
