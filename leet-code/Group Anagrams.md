# Group Anagrams

[LeetCode 문제 링크](https://leetcode.com/problems/group-anagrams)

```javascript
function groupAnagrams(strs: string[]): string[][] {
  const sortedStrList = makeSortedStrList(strs);
  const sortedStrListMap = makeAnagramMap(sortedStrList, strs);

  return [...sortedStrListMap.values()];
}

function makeSortedStrList(strs: readonly string[]): readonly string[] {
  return strs.map((str) => str.split("").sort().join(""));
}

function makeAnagramMap(sortedStrList: readonly string[], origin: readonly string[]): ReadonlyMap<string, string[]> {
  const map = new Map<string, string[]>();
  sortedStrList.forEach((sortedStr, index) => {
    const sameWordList = map.get(sortedStr) ?? [];
    map.set(sortedStr, [...sameWordList, origin[index]]);
  });

  return map;
}
```
