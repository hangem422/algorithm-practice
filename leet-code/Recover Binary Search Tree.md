# Recover Binary Search Tree

[LeetCode 문제 링크](https://leetcode.com/problems/recover-binary-search-tree)

## 모든 노드를 수정하는 방법

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

## 두 노드만을 변경하는 방법

모든 노드를 수정하는 것도 좋지만, 문제에서는 단 두 노드만 바뀌었다고 나와있다. 이 점을 이용하면 조금 더 빠르게 풀 수 있지 않을까? 하지만 코드 복잡도가 심각해진 것에 비해 드라마틱한 속도 변화가 있었다.

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
  let isFinished = false;

  const validateTreeNode = (node) => {
    if (lastVisitedNode && lastVisitedNode.val > node.val) {
      if (firstChangedNode) {
        secondChangedNode = node;
        isFinished = true;
      } else {
        firstChangedNode = lastVisitedNode;
        secondChangedNode = node;
      }
    }
  };

  const traverseInOrderOterative = (node) => {
    if (!node || isFinished) {
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
