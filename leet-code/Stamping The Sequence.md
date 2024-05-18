# Stamping The Sequence

[LeetCode 문제 링크](https://leetcode.com/problems/stamping-the-sequence)

```typescript
function movesToStamp(stamp: string, target: string): number[] {
  const initially = "?".repeat(target.length);
  const output: Array<number> = [];

  const maxCount = 10 * target.length;
  let currentTarget = target;
  let count = 0;

  while (currentTarget !== initially) {
    const index = findGreedy(stamp, currentTarget);
    if (index >= 0) {
      currentTarget = remoceStamp(currentTarget, stamp, index);
      output.push(index);
    } else {
      return [];
    }

    count += 1;
    if (count > maxCount) {
      return [];
    }
  }

  return output.reverse();
}

function findGreedy(stamp: string, target: string): number {
  let maxScore = 0;
  let index = -1;

  for (let i = 0; i <= target.length - stamp.length; i += 1) {
    let score = 0;

    for (let j = 0; j < stamp.length; j += 1) {
      const char = target[i + j];

      if (char === stamp[j]) {
        score += 1;
      } else if (char !== "?") {
        score = 0;
        break;
      }
    }

    if (score > maxScore) {
      maxScore = score;
      index = i;
    }
  }

  return index;
}

function remoceStamp(target: string, stamp: string, index: number): string {
  return target.slice(0, index) + "?".repeat(stamp.length) + target.slice(index + stamp.length);
}
```
