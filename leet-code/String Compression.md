# String Compression

[LeetCode 문제 링크](https://leetcode.com/problems/string-compression)

```javascript
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const str = getCompressStr(chars);
  convertCharsToResult(chars, str);
  return str.length;
};

function getCompressStr(chars) {
  let res = chars[0];
  let count = 1;

  for (let i = 1; i < chars.length; i += 1) {
    const last = res[res.length - 1];
    const char = chars[i];

    if (last === char) {
      count += 1;
    } else {
      if (count > 1) {
        res += count;
        count = 1;
      }
      res += char;
    }
  }

  if (count > 1) {
    res += count;
  }

  return res;
}

function convertCharsToResult(chars, str) {
  for (let i = 0; i < str.length; i += 1) {
    chars[i] = str[i];
  }
}
```
