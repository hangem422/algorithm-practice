# Maximum Points You Can Obtain from Cards

[LeetCode 문제 링크](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards)

```typescript
function maxScore(cardPoints: number[], k: number): number {
  let sum = getSumFromArray(cardPoints, 0, k);
  let max = sum;

  for (let i = 0; i < k; i += 1) {
    const removeIndex = k - i - 1;
    const addIndex = cardPoints.length - 1 - i;

    sum = sum + cardPoints[addIndex] - cardPoints[removeIndex];
    if (max < sum) {
      max = sum;
    }
  }

  return max;
}

function getSumFromArray(arr: number[], from: number, to: number): number {
  let sum = 0;
  for (let i = from; i < to; i += 1) {
    sum += arr[i];
  }

  return sum;
}
```
