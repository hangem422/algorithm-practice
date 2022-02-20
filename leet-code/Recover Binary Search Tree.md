# Recover Binary Search Tree

[LeetCode 문제 링크](https://leetcode.com/problems/recover-binary-search-tree)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let lastVisitedNode = null;
  let firstChangedNode = null;
  let secondChangedNode = null;

  const validateTreeNode = (node) => {
    if (lastVisitedNode && lastVisitedNode.val > node.val) {
      if (firstChangedNode) {
        secondChangedNode = node;
      } else {
        firstChangedNode = lastVisitedNode;
        secondChangedNode = node;
      }
    }
  };

  const traverseInOrderOterative = (node) => {
    if (!node) {
      return;
    }

    traverseInOrderOterative(node.left);
    validateTreeNode(node);
    lastVisitedNode = node;
    traverseInOrderOterative(node.right);
  };

  traverseInOrderOterative(root);
  swap(firstChangedNode, secondChangedNode);
};

function swap(node1, node2) {
  const temp = node1.val;
  node1.val = node2.val;
  node2.val = temp;
}
```

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const inOrderList = [];
  traverseInOrder(root, (node) => inOrderList.push(node.val));
  inOrderList.sort((a, b) => a - b);

  let index = 0;
  traverseInOrder(root, (node) => {
    node.val = inOrderList[index];
    index += 1;
  });
};

function traverseInOrder(node, func) {
  node.left && traverseInOrder(node.left, func);
  func(node);
  node.right && traverseInOrder(node.right, func);
}
```
