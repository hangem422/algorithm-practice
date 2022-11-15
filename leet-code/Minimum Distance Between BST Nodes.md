# Minimum Distance Between BST Nodes

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-distance-between-bst-nodes)

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

interface TraversalInfo {
  min: number;
  max: number;
  minDiff: number;
}

function minDiffInBST(root: TreeNode | null): number {
  const numberList = getSortedNumberListFormBinaryTree(root);
  return getMinDiffFromSortedNumberList(numberList);
}

function getSortedNumberListFormBinaryTree(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  const numberList: number[] = [];
  let cur = root;

  while (true) {
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left;
      continue;
    }

    if (stack.length > 0) {
      cur = stack.pop();
      numberList.push(cur.val);
      cur = cur.right;
      continue;
    }

    break;
  }

  return numberList;
}

function getMinDiffFromSortedNumberList(numberList: number[]): number {
  let minDiff = Infinity;

  for (let i = 1; i < numberList.length; i += 1) {
    minDiff = Math.min(minDiff, numberList[i] - numberList[i - 1]);
  }

  return minDiff;
}
```
