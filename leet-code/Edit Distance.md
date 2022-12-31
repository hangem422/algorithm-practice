# Edit Distance

[LeetCode 문제 링크](https://leetcode.com/problems/edit-distance)

```typescript
function minDistance(word1: string, word2: string): number {
  const word1Size = word1.length;
  const word2Size = word2.length;

  const dp = Array.from({ length: word1Size + 1 }, () => Array.from<number>({ length: word2Size + 1 }).fill(0));

  // word1의 부분 문자열이 빈 문자열로 변경되는 경우
  // 부분 문자열의 length만큼 delete하는 방법만 존재한다.
  for (let i = 1; i <= word1Size; i += 1) {
    dp[i][0] = i;
  }

  // 빈 문자열에서 word2의 부분 문자열을 만드는 경우
  // 부분 문자열의 length만큼 add하는 방법만 존재한다.
  for (let j = 0; j <= word2Size; j += 1) {
    dp[0][j] = j;
  }

  // word1의 부분 문자열이 word2의 부분 문자열로 변경되는 경우
  // add, delete, replace를 쓰는 겨우 중 최소값 경우를 선택한다.
  for (let i = 1; i <= word1Size; i += 1) {
    for (let j = 1; j <= word2Size; j += 1) {
      // 현재 비교하는 문자가 같은 경우 replace의 비용이 들지 않는다.
      const replaceCase = dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1);
      const deleteCase = dp[i - 1][j] + 1;
      const addCase = dp[i][j - 1] + 1;
      dp[i][j] = Math.min(replaceCase, deleteCase, addCase);
    }
  }

  return dp[word1Size][word2Size];
}
```
