# Kth Smallest Element in a BST

[LeetCode 문제 링크](https://leetcode.com/problems/kth-smallest-element-in-a-bst)

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: Array<TreeNode> = [];
  let cur: TreeNode | null = root;
  let index = 0;

  while (true) {
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left;
      continue;
    }

    if (stack.length > 0) {
      cur = stack.pop()!;

      index += 1;
      if (index === k) {
        return cur.val;
      }

      cur = cur.right;
      continue;
    }
  }
}
```
