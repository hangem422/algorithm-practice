# Linked List Cycle

[LeetCode 문제 링크](https://leetcode.com/problems/linked-list-cycle)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let pre = head;
  let suf = head?.next;

  while (suf) {
    pre = pre.next;
    suf = suf.next?.next;
    if (pre === suf) {
      return true;
    }
  }

  return false;
};
```
