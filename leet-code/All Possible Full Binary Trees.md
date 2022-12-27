# All Possible Full Binary Trees

[LeetCode 문제 링크](https://leetcode.com/problems/all-possible-full-binary-trees)

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

type DynamicCacheItem = Array<TreeNode> | undefined;
type DynamicCache = Array<DynamicCacheItem>;

function allPossibleFBT(n: number): Array<TreeNode | null> {
  const cache = Array.from<DynamicCacheItem>({ length: n + 1 });
  cache[0] = [];
  cache[1] = [new TreeNode(0, null, null)];

  return _allPossibleFBT(n, cache);
}

function _allPossibleFBT(n: number, cache: DynamicCache): Array<TreeNode> {
  if (cache[n] === undefined) {
    const treeNodeList: Array<TreeNode> = [];
    const remainNodeCount = n - 1;

    for (let i = 1; i < remainNodeCount; i += 1) {
      const lefNodetList = _allPossibleFBT(i, cache);
      const rightNodeList = _allPossibleFBT(remainNodeCount - i, cache);

      for (const leftNode of lefNodetList) {
        for (const rightNode of rightNodeList) {
          treeNodeList.push(new TreeNode(0, leftNode, rightNode));
        }
      }
    }

    cache[n] = treeNodeList;
  }

  return cache[n] as Array<TreeNode>;
}
```
