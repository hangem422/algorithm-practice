# Plus One

[LeetCode 문제 링크](https://leetcode.com/problems/plus-one)

## 형변환을 이용한 풀이

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return (BigInt(digits.join("")) + 1n).toString().split("");
};
```

## 반복문을 이용한 풀이

형변환을 이용한 풀이와 별다른 차이가 없다.

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (digits[i] < 9) {
      digits[i] += 1;
      break;
    }
    digits[i] = 0;
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
};
```
