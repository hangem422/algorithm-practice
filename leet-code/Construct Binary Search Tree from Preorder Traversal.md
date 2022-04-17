# Construct Binary Search Tree from Preorder Traversal

[LeetCode 문제 링크](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal)

```javascript
class TreeNode {
  constructor(val, left, right) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const tree = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i += 1) {
    addNode(preorder[i], tree);
  }
  return tree;
};

function addNode(num, node) {
  if (node.val > num) {
    if (node.left === null) {
      node.left = new TreeNode(num);
    } else {
      addNode(num, node.left);
    }
  } else {
    if (node.right === null) {
      node.right = new TreeNode(num);
    } else {
      addNode(num, node.right);
    }
  }
}
```
