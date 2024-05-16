# Non-overlapping Intervals

[LeetCode 문제 링크](https://leetcode.com/problems/non-overlapping-intervals)

```typescript
type Interval = [start: number, end: number];

function eraseOverlapIntervals(intervals: Array<Interval>): number {
  const sortedInterval = [...intervals].sort((interval1, interval2) => interval1[0] - interval2[0]);

  let result = 0;
  let end = sortedInterval[0][1];

  for (let i = 1; i < sortedInterval.length; i += 1) {
    if (end > sortedInterval[i][0]) {
      result += 1;
      end = Math.min(end, sortedInterval[i][1]);
    } else {
      end = sortedInterval[i][1];
    }
  }

  return result;
}
```
