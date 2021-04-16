# 모듈로

## 1. 더하기

(A + B) mod M = ((A mod M) + (B mod M)) mod M

```javascript
const ans = ((A % M) + (B % M)) % M;
```

## 2. 빼기

(A - B) mod M = ((A mod M) - (B mod M)) mod M

```javascript
const ans = ((A % M) - (B % M)) % M;
```

## 3. 곱하기

(A \* B) mod M = ((A mod M) \* (B mod M)) mod M

```javascript
const ans = ((A % M) * (B % M)) % M;
```

## 4. 나누기

**페르소마 소정리:** B^M-1^ mod M = (B \* B^M-2^) mod M = 1, 단 M은 소수이고 B가 M의 배수가 아닌 경우

- (A / B) mod M
- (A \* B^-1^) mod M
- ((A mod M) \* (B^-1^ mod M)) mod M
- ((A mod M) \* (B^-1^ mod M) \* ((B \* B^M-2^) mod M )) mod M
- ((A mod M) \* ((B^-1^ \* B \* B^M-2^) mod M)) mod M
- ((A mod M) \* (B^M-2^ mod M)) mod M

```javascript
const ans = ((A % M) * (Math.pow(B, M - 2) % M)) % M;
```
