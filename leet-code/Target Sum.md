# Target Sum

[LeetCode 문제 링크](https://leetcode.com/problems/target-sum)

`0 <= sum(nums[i]) <= 1000` 조건을 보았을 때, 2차원 배열로 캐싱을 만들거나 기타 다른 방법으로 Dynamic Programming을 할 수 있어야 할 것 같다. 일단은 방법이 생각나지 않아서 Map을 사용해 캐싱하여 풀었다.

```typescript
type CacheType = Array<{ [target: number]: number }>;

function findTargetSumWays(nums: number[], target: number): number {
  return dfs(nums, nums.length - 1, target, generateCache(nums));
}

function generateCache(nums: number[]): CacheType {
  const cache: CacheType = Array.from({ length: nums.length }, () => ({}));
  cache[0][nums[0]] = 1;
  // nums[0]가 0일 때를 위해서
  cache[0][-nums[0]] = -nums[0] in cache[0] ? cache[0][nums[0]] + 1 : 1;

  return cache;
}

function dfs(nums: number[], index: number, target: number, cache: CacheType): number {
  if (index < 0) {
    return 0;
  }

  if (!(target in cache[index])) {
    const plusFromPrev = dfs(nums, index - 1, target - nums[index], cache);
    const minusFromPrev = dfs(nums, index - 1, target + nums[index], cache);
    cache[index][target] = plusFromPrev + minusFromPrev;
  }

  return cache[index][target];
}
```
