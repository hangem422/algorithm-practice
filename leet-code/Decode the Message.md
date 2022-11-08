# Decode the Message

[LeetCode 문제 링크](https://leetcode.com/problems/decode-the-message/description)

```typescript
type Substitutionable = { [letter: string]: string };

function decodeMessage(key: string, message: string): string {
  const substitutionable = parseKeyToSubstitutionable(key);
  return decodeMessasge(message, substitutionable);
}

function parseKeyToSubstitutionable(key: string): Substitutionable {
  const substitutionable: Substitutionable = {};
  const maxCode = "z".charCodeAt(0);
  let code = "a".charCodeAt(0);

  for (const char of key) {
    if (isSpace(char) || char in substitutionable) {
      continue;
    }

    substitutionable[char] = String.fromCharCode(code);
    code += 1;

    if (code > maxCode) {
      break;
    }
  }

  return substitutionable;
}

function decodeMessasge(messasge: string, substitutionable: Substitutionable): string {
  let decoded = "";

  for (const char of messasge) {
    decoded += decodeCharacter(char, substitutionable);
  }

  return decoded;
}

function decodeCharacter(char: string, substitutionable: Substitutionable): string {
  if (isSpace(char)) {
    return char;
  }

  return substitutionable[char];
}

function isSpace(char: string): boolean {
  return /^\s$/.test(char);
}
```
