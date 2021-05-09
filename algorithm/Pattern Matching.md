# Pattern Matching

## 1. 원시적인 매칭 (Naive Matching)

```javascript
function search(txt, pat) {
  const n = txt.length;
  const m = pat.length;
  const ps = [];

  for (let i = 0, l = n - m; i <= l; i += 1) {
    let j = 0;

    while (j < m) {
      if (txt[i + j] !== pat[j]) break;
      j += 1;
    }

    if (j === m) {
      ps[ps.length] = i + 1;
    }
  }

  return ps;
}
```

## 2. 오토마타를 이용한 매칭 (Finite Automata Based Algorithm)

```javascript
function makeMap(txt) {
  const map = new Map();
  let code = 0;

  for (const char of txt) {
    if (!map.has(char)) {
      map.set(char, code);
      code += 1;
    }
  }

  return map;
}

function getNextState(pat, m, state, next, map) {
  if (state < m && next === map.get(pat[state])) {
    return state + 1;
  }

  for (let nextState = state; nextState > 0; nextState -= 1) {
    if (next === map.get(pat[nextState - 1])) {
      const start = state - nextState + 1;
      let valid = true;

      for (let i = 0; i < nextState - 1; i += 1) {
        if (pat[i] !== pat[start + i]) {
          valid = false;
          break;
        }
      }

      if (valid) return nextState;
    }
  }

  return 0;
}

function computeTF(pat, m, map) {
  const tf = Array.from({ length: m + 1 }, () => Array(map.size));

  for (let state = 0; state <= m; state += 1) {
    for (let next = 0; next < map.size; next += 1) {
      tf[state][next] = getNextState(pat, m, state, next, map);
    }
  }

  return tf;
}

function search(txt, pat) {
  const n = txt.length;
  const m = pat.length;
  const ps = [];

  const map = makeMap(txt);
  const tf = computeTF(pat, m, map);

  for (let i = 0, state = 0; i < n; i += 1) {
    const next = map.get(txt[i]);
    state = tf[state][next];

    if (state === m) {
      ps[ps.length] = i - m + 2;
    }
  }

  return ps;
}
```

## 2. KMP 알고리즘 (Knuth-Morris-Pratt)

```javascript
function computeLPSArray(pat, m) {
  const lps = Array(m).fill(0, 0, 1);
  let len = 0;

  for (let i = 1; i < m; i += 1) {
    while (pat[i] !== pat[len] && len > 0) len = lps[len - 1];
    if (pat[len] === pat[i]) len += 1;
    lps[i] = len;
  }

  return lps;
}

function search(txt, pat) {
  const n = txt.length;
  const m = pat.length;
  const ps = [];

  const lps = computeLPSArray(pat, m);
  let pi = 0;
  let ti = 0;

  while (ti < n) {
    if (txt[ti] === pat[pi]) {
      pi += 1;
      ti += 1;
    } else {
      if (pi !== 0) pi = lps[pi - 1];
      else ti += 1;
    }

    if (pi === m) {
      ps[ps.length] = ti - pi + 1;
      pi = lps[pi - 1];
    }
  }

  return ps;
}
```
