# Longest Happy String

[LeetCode 문제 링크](https://leetcode.com/problems/longest-happy-string)

```typescript
interface SimpleHeapItem {
  readonly value: string;
  readonly count: number;
}

type SimpleHeap = SimpleHeapItem[];

const MAX_COUNT = 2;

function longestDiverseString(a: number, b: number, c: number): string {
  let res = "";
  let heap = generateSimpeHeap(a, b, c);

  while (true) {
    const exceptValue = getExceptValueFromRestring(res);
    const item = peak(heap, exceptValue);
    if (item === undefined) {
      break;
    }

    res += item.value;
    heap = set(heap, { ...item, count: item.count - 1 });
  }

  return res;
}

function generateSimpeHeap(a: number, b: number, c: number): SimpleHeap {
  return [
    { value: "a", count: a },
    { value: "b", count: b },
    { value: "c", count: c },
  ];
}

function getExceptValueFromRestring(res: string): string | undefined {
  const length = res.length;
  if (length < 2 || res[length - 1] !== res[length - 2]) {
    return undefined;
  }
  return res[length - 1];
}

function peak(heap: SimpleHeap, exceptValue?: string): SimpleHeapItem | undefined {
  const sorted = [...heap].sort((item1, item2) => item2.count - item1.count);
  return sorted.find((item) => item.value !== exceptValue && item.count > 0);
}

function set(heap: SimpleHeap, item: SimpleHeapItem) {
  const index = heap.findIndex((prev) => prev.value === item.value);
  const nextHeap = [...heap];
  nextHeap.splice(index, 1, item);
  return nextHeap;
}
```
