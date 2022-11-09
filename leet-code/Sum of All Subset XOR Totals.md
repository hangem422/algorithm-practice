# Sum of All Subset XOR Totals

[LeetCode 문제 링크](https://leetcode.com/problems/sum-of-all-subset-xor-totals)

```typescript
function subsetXORSum(nums: number[]): number {
  return backtracking({ startIndex: 0, nums, initialXOR: 0 });
}

function backtracking(params: { startIndex: number; nums: number[]; initialXOR: number }): number {
  const { startIndex, nums, initialXOR } = params;
  let total = 0;

  for (let i = startIndex; i < nums.length; i += 1) {
    const curXOR = calcXOR(initialXOR, nums[i]);
    total += curXOR;
    total += backtracking({ startIndex: i + 1, nums, initialXOR: curXOR });
  }

  return total;
}

function calcXOR(a: number, b: number): number {
  return a + b - 2 * (a & b);
}
```
