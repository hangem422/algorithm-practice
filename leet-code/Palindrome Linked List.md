# Palindrome Linked List

[LeetCode 문제 링크](https://leetcode.com/problems/palindrome-linked-list/description)

## 기본 풀이

처음에 아무 생각 없이 떠올린 풀이입니다.

```javascript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  const arr = parseLinkedListToArray(head);
  return isPartialPalindrome(arr, 0, arr.length - 1);
}

function isPartialPalindrome(arr: Array<number>, from: number, to: number): boolean {
  return arr[from] === arr[to] && (to - from <= 2 || isPartialPalindrome(arr, from + 1, to - 1));
}

function parseLinkedListToArray(head: ListNode | null): Array<number> {
  const arr: number[] = [];
  for (let node: ListNode | null = head; node !== null; node = node.next) {
    arr.push(node.val);
  }

  return arr;
}
```

## 메모리 효율을 챙겨볼까?

메모리 성능이 안좋게 측정 됐습니다. 재귀를 사용하는데 링크드 리스트와 동일한 배열까지 생성했으니 당연한 결과 같았습니다. 하지만 `ListNode` 인스턴스에 변화를 주는 action 함수를 만드는 것은 최악의 선택이라 생각했습니다. 그래서 다음 방법을 떠올렸는데.. 뭔가 속도와 메모리 둘 다 좋지 않은 결과를 맞이했습니다. 앞선 풀이도 재귀를 사용했기에.. 속도와 메모리 양쪽 다 좋을 것이라 생각했는데 충격적입니다. 왜이닞 아직 모르겠습니다.

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  const size = getSize(head);
  const mid = size / 2;

  try {
    palindromeTest(head, mid, 1);
    return true;
  } catch {
    return false;
  }
}

function getSize(head: ListNode | null): number {
  let size = 0;
  for (let node = head; node !== null; node = node.next) {
    size += 1;
  }

  return size;
}

function palindromeTest(node: ListNode | null, mid: number, count: number): ListNode | null {
  const nextNode = node && node.next;
  if (count > mid) {
    return Number.isInteger(mid) ? node : nextNode;
  }

  const compareTarget = palindromeTest(nextNode, mid, count + 1);
  if (compareTarget?.val !== node?.val) {
    throw new Error();
  }

  return compareTarget && compareTarget.next;
}
```
