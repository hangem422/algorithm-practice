# Count and Say

[LeetCode 문제 링크](https://leetcode.com/problems/count-and-say)

```typescript
function countAndSay(n: number): string {
  if (n === 1) {
    return "1";
  }

  return say(countAndSay(n - 1));
}

function say(digitString: string) {
  const digitStringSize = digitString.length;
  let result = "";
  let i = 0;

  while (i < digitStringSize) {
    const startIndex = i;
    const firstChar = digitString[startIndex];

    while (i < digitStringSize && digitString[i] === firstChar) {
      i += 1;
    }

    result += `${i - startIndex}${firstChar}`;
  }

  return result;
}
```
