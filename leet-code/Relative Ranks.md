# Relative Ranks

[LeetCode 문제 링크](https://leetcode.com/problems/relative-ranks)

```typescript
function findRelativeRanks(score: number[]): string[] {
  return parseScoreListToRankList(score, getScoreRankMap(score));
}

function getScoreRankMap(score: number[]): Map<number, string> {
  const map = new Map();
  [...score].sort((a, b) => b - a).forEach((num, index) => map.set(num, getRank(index)));

  return map;
}

function getRank(index: number): string {
  switch (index) {
    case 0:
      return "Gold Medal";
    case 1:
      return "Silver Medal";
    case 2:
      return "Bronze Medal";
    default:
      return String(index + 1);
  }
}

function parseScoreListToRankList(score: number[], scoreRankMap: Map<number, string>): string[] {
  return score.map((num) => scoreRankMap.get(num)!);
}
```
