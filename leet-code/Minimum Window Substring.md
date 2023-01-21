# Minimum Window Substring

[LeetCode 문제 링크](https://leetcode.com/problems/minimum-window-substring)

```typescript
class WindowSubstring {
  private remainCount: number;
  private chars: { [char: string]: number };
  private subString: string;

  constructor(str: string) {
    this.remainCount = str.length;
    this.chars = {};
    this.subString = "";

    for (const char of str) {
      this.chars[char] = (this.chars[char] ?? 0) + 1;
    }
  }

  public add(char: string): void {
    this.subString += char;
    if (char in this.chars) {
      this.chars[char] -= 1;
      if (this.chars[char] >= 0) {
        this.remainCount -= 1;
      }
    }
  }

  public isFinished(): boolean {
    return this.remainCount === 0;
  }

  public diet(): void {
    while (true) {
      const firstChar = this.subString.charAt(0);
      if (firstChar in this.chars && this.chars[firstChar] >= 0) {
        break;
      }

      this.shift();
    }
  }

  public isMinSubstringThan(str: string): boolean {
    return this.subString.length < str.length;
  }

  public get(): string {
    return this.subString;
  }

  public shift(): void {
    const firstChar = this.subString.charAt(0);
    this.subString = this.subString.slice(1);

    if (firstChar in this.chars) {
      this.chars[firstChar] += 1;
      if (this.chars[firstChar] > 0) {
        this.remainCount += 1;
      }
    }
  }
}

function minWindow(s: string, t: string): string {
  const windowSubstirng = new WindowSubstring(t);
  let result: string = "";

  for (const char of s) {
    windowSubstirng.add(char);
    if (!windowSubstirng.isFinished()) {
      continue;
    }

    windowSubstirng.diet();
    if (result === "" || windowSubstirng.isMinSubstringThan(result)) {
      result = windowSubstirng.get();
    }

    windowSubstirng.shift();
  }

  return result;
}
```
