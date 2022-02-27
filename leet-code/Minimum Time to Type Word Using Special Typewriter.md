# Minimum Time to Type Word Using Special Typewriter

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter)

```javascript
/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let sec = 0;
  let pointerCode = 97;

  for (let i = 0; i < word.length; i += 1) {
    const nextCode = word.charCodeAt(i);
    sec += calcDistance(pointerCode, nextCode) + 1;
    pointerCode = nextCode;
  }

  return sec;
};

function calcDistance(code1, code2) {
  const [front, late] = sortCode(code1, code2);
  const clockwise = late - front;
  const counterClockwise = front - 97 + 122 - late + 1;
  return Math.min(clockwise, counterClockwise);
}

function sortCode(code1, code2) {
  if (code1 < code2) {
    return [code1, code2];
  }
  return [code2, code1];
}
```
