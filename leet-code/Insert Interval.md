# Insert Interval

[LeetCode 문제 링크](https://leetcode.com/problems/insert-interval)

```typescript
type Interval = [number, number];
type Intervals = Array<Interval>;

function insert(intervals: Intervals, newInterval: Interval): number[][] {
  const [startPosition, intervalsWithStartPosition] = makePosition(intervals, newInterval[0]);
  const [endPosition, intervalsWithNewInterval] = makePosition(intervalsWithStartPosition, newInterval[1]);

  return mergeIntervals(intervalsWithNewInterval, startPosition, endPosition);
}

function makePosition(intervals: Intervals, num: number): [number, Intervals] {
  for (let i = 0; i < intervals.length; i += 1) {
    const [start, end] = intervals[i];

    if (num >= start && num <= end) {
      return [i, [...intervals]];
    }
    if (num < start) {
      return [i, insertInterval(intervals, [num, num], i)];
    }
  }

  return [intervals.length, insertInterval(intervals, [num, num], intervals.length)];
}

function insertInterval(intervals: Intervals, interval: Interval, index: number): Intervals {
  return [...intervals.slice(0, index), interval, ...intervals.slice(index)];
}

function mergeIntervals(intervals: Intervals, start: number, end: number): Intervals {
  return [...intervals.slice(0, start), [intervals[start][0], intervals[end][1]], ...intervals.slice(end + 1)];
}
```
