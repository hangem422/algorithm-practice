# Binary Tree Zigzag Level Order Traversal

[LeetCode 문제 링크](https://leetcode.com/problems/build-an-array-with-stack-operations)

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const ans = [];
  const nodeList = [];

  if (root) {
    nodeList.push(root);
    zigzagLevelOrderTraversal(nodeList, true, ans);
  }

  return ans;
};

function zigzagLevelOrderTraversal(nodeList, isLeftToRight, ans) {
  const currentLevelOrder = [];
  const nextNodeList = [];

  for (let i = nodeList.length - 1; i >= 0; i -= 1) {
    currentLevelOrder.push(nodeList[i].val);
    if (isLeftToRight) {
      addNextNodeLeftToRight(nodeList[i], nextNodeList);
    } else {
      addNextNodeRightToLeft(nodeList[i], nextNodeList);
    }
  }

  if (currentLevelOrder.length > 0) {
    ans.push(currentLevelOrder);
  }

  if (nextNodeList.length > 0) {
    zigzagLevelOrderTraversal(nextNodeList, !isLeftToRight, ans);
  }
}

function addNextNodeLeftToRight(nextNode, nextNodeList) {
  if (nextNode.left) {
    nextNodeList.push(nextNode.left);
  }
  if (nextNode.right) {
    nextNodeList.push(nextNode.right);
  }
}

function addNextNodeRightToLeft(nextNode, nextNodeList) {
  if (nextNode.right) {
    nextNodeList.push(nextNode.right);
  }
  if (nextNode.left) {
    nextNodeList.push(nextNode.left);
  }
}
```
