# Two Sum IV - Input is a BST

[LeetCode 문제 링크](https://leetcode.com/problems/two-sum-iv-input-is-a-bst)

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

function findTarget(root: TreeNode | null, k: number): boolean {
  const stack: Array<TreeNode> = [];
  const set = new Set<number>();

  if (root !== null) {
    stack.push(root);
  }

  while (stack.length > 0) {
    const cur = stack.pop()!;
    const val = cur.val;
    const diff = k - val;

    if (set.has(val) || set.has(diff)) {
      return true;
    }

    set.add(val);
    set.add(diff);

    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }

  return false;
}
```
