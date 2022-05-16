# Reverse Vowels of a String

[LeetCode 문제 링크](https://leetcode.com/problems/reverse-vowels-of-a-string)

```javascript
const VOWELS = ["a", "e", "i", "o", "u"];

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const strArr = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    while (left < right && !isVowel(s[left])) {
      left += 1;
    }
    while (right > left && !isVowel(s[right])) {
      right -= 1;
    }

    strArr[right] = s[left];
    strArr[left] = s[right];
    left += 1;
    right -= 1;
  }

  return strArr.join("");
};

function isVowel(char) {
  return VOWELS.includes(char.toLowerCase());
}
```
