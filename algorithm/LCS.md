# 최장 공통 문자열(Longest Common Substring)

- 공통 문자열은 연속된다.
- 현재 두 문자가 같을 떄, 앞 글자가 공통 문자열이면 이어진다.
- 아니라면 현재부터 공통 문자열을 만들어간다.

```typescript
function getLongestCommonSubstring(strA: string, strB: string) {
  const sizeA = strA.length;
  const sizeB = strB.length;

  // 편의상 column과 row에 한칸에 여분을 둔다.
  const lcs = Array.from({ length: sizeA + 1 }, () => Array.from<number>({ length: sizeB + 1 }).fill(0));
  let max: number = 0;

  for (let i = 1; i <= sizeA; i += 1) {
    for (let j = 1; j <= sizeB; j += 1) {
      // 현재 두 문자가 같을 떄, 앞 글자가 공통 문자열이면 이어진다.
      // 아니라면 현재부터 공통 문자열을 만들어간다.
      lcs[i][j] = strA[i - 1] === strB[j - 1] ? lcs[i - 1][j - 1] + 1 : 0;
      // 최대길이를 갱신한다.
      if (lcs[i][j] > max) {
        max = lcs[i][j];
      }
    }
  }

  return max;
}
```

# 최장 공통 부분수열(Longest Common Subsequence)

- `strA[i]`와 `strB[j]`가 같다면 `strA[i - 1]`과 `strB[j - 1]`까지의 최장 공통 부분수열에 1을 추가한다.
- `strA[i]`와 `strB[j]`가 같지 않다면 `strA[i]`과 `strB[j - 1]`의 최장 공통 부분수열과 `strA[i - 1]`과 `strB[j]`의 최장 공통 부분수열 중 큰 수를 이어간다.

```typescript
function getLongestCommonSubsequence(strA: string, strB: string) {
  const sizeA = strA.length;
  const sizeB = strB.length;

  const lcs = Array.from({ length: sizeA + 1 }, () => Array.from<number>({ length: sizeB + 1 }).fill(0));

  for (let i = 1; i <= sizeA; i += 1) {
    for (let j = 1; j <= sizeB; j += 1) {
      if (strA[i - 1] === strB[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      }
    }
  }

  return lcs[sizeA][sizeB];
}
```

# 최장 공통 부분수열(Longest Common Subsequence) 찾기

**최장 공통 부분수열**(Longest Common Subsequence)을 역으로 수행한다.

```typescript
function parseLcsToString(strA: string, strB: string, lcs: number[][]) {
  const result: string[] = [];
  let i = lcs.length - 1;
  let j = lcs[0].length - 1;

  while (true) {
    if (i === 0 || j === 0) {
      break;
    }

    if (strA[i - 1] === strB[j - 1]) {
      result.push(strA[i - 1]);
      i -= 1;
      j -= 1;
    } else if (lcs[i][j] === lcs[i - 1][j]) {
      i -= 1;
    } else {
      j -= 1;
    }
  }

  return result.reverse().join("");
}
```
