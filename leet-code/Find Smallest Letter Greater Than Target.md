# Find Smallest Letter Greater Than Target

[LeetCode 문제 링크](https://leetcode.com/problems/find-smallest-letter-greater-than-target)

```javascript
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  const index = left % letters.length;
  return letters[index];
};
```
