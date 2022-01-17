# Vowels of All Substrings

[LeetCode 문제 링크](https://leetcode.com/problems/vowels-of-all-substrings)

```javascript
const VOWELS = ["a", "e", "i", "o", "u"];

/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function (word) {
  const wordLength = word.length;
  const totalSubstringCount = getSubstringCount(wordLength);
  let sum = 0;

  for (let i = 0; i < wordLength; i += 1) {
    if (VOWELS.includes(word[i])) {
      const leftSubstringCount = getSubstringCount(i);
      const rightSubstringCount = getSubstringCount(wordLength - i - 1);
      sum += totalSubstringCount - leftSubstringCount - rightSubstringCount;
    }
  }

  return sum;
};

function getSubstringCount(size) {
  return (size + 1) * (size / 2);
}
```
