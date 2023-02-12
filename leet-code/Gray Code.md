# Gray Code

[LeetCode 문제 링크](https://leetcode.com/problems/gray-code)

```typescript
function grayCode(n: number): number[] {
  return Array.from({ length: Math.pow(2, n) }, (_, index) =>
    parseBinaryStringToDeciaml(parseBinaryStringToGrayCodeString(parseDecimalToBinaryString(index)))
  );
}

function parseDecimalToBinaryString(decimal: number): string {
  return decimal.toString(2);
}

function parseBinaryStringToGrayCodeString(binary: string): string {
  let grayCode = "";
  let prevBit = "0";

  for (const bit of binary) {
    grayCode += bit === prevBit ? "0" : "1";
    prevBit = bit;
  }

  return grayCode;
}

function parseBinaryStringToDeciaml(binary: string): number {
  return parseInt(binary, 2);
}
```
