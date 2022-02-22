# Wildcard Matching

[LeetCode 문제 링크](https://leetcode.com/problems/wildcard-matching)

## 1. 정규식을 이용해서 풀어보기

시간 초과로 실패했다.

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const regStr = p.replace(/\?/g, "\\S").replace(/\*+/g, ".*");
  const regExp = new RegExp(`^${regStr}$`);
  console.log(`^${regStr}$`);
  return regExp.test(s);
};
```

## 2. DFS를 사용해서 풀어보기

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  return patterMatching(s, 0, p, 0);
};

function patterMatching(s, si, p, pi) {
  if (p[pi] === "*") {
    return handleStartPattern(s, si, p, pi);
  }

  if (si === s.length || pi === p.length) {
    return si === s.length && pi === p.length;
  }

  if (p[pi] === "?") {
    return patterMatching(s, si + 1, p, pi + 1);
  }

  return s[si] === p[pi] && patterMatching(s, si + 1, p, pi + 1);
}

function handleStartPattern(s, si, p, pi) {
  const nextPatterIndex = getNextIndexOfStarString(p, pi);
  if (nextPatterIndex === -1) {
    return true;
  }

  for (let nextStringIndex = si; nextStringIndex < s.length; nextStringIndex += 1) {
    if (patterMatching(s, nextStringIndex, p, nextPatterIndex)) {
      return true;
    }
  }

  return false;
}

function getNextIndexOfStarString(str, index) {
  for (let i = index + 1; i < str.length; i += 1) {
    if (str[i] !== "*") {
      return i;
    }
  }

  return -1;
}
```

## 3. 메모라이징 사용하기

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const cache = Array.from({ length: s.length }, () => Array(p.length));
  return patterMatching(s, 0, p, 0, cache);
};

function patterMatching(s, si, p, pi, cache) {
  if (si === s.length) {
    return getNextIndexOfStarString(p, pi) === -1;
  }

  if (pi === p.length) {
    return si === s.length;
  }

  if (cache[si][pi] === undefined) {
    if (p[pi] === "*") {
      cache[si][pi] = handleStartPattern(s, si, p, pi, cache);
    } else if (p[pi] === "?") {
      cache[si][pi] = patterMatching(s, si + 1, p, pi + 1, cache);
    } else {
      cache[si][pi] = s[si] === p[pi] && patterMatching(s, si + 1, p, pi + 1, cache);
    }
  }

  return cache[si][pi];
}

function handleStartPattern(s, si, p, pi, cache) {
  const nextPatterIndex = getNextIndexOfStarString(p, pi);
  if (nextPatterIndex === -1) {
    return true;
  }

  for (let nextStringIndex = si; nextStringIndex < s.length; nextStringIndex += 1) {
    if (patterMatching(s, nextStringIndex, p, nextPatterIndex, cache)) {
      return true;
    }
  }

  return false;
}

function getNextIndexOfStarString(str, index) {
  for (let i = index; i < str.length; i += 1) {
    if (str[i] !== "*") {
      return i;
    }
  }

  return -1;
}
```
