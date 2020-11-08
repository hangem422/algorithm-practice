# 정수 N개의 합

[백준 문제 링크](https://www.acmicpc.net/problem/15596)

제출할 수 있는 언어중에, 자바스크립트가 없었다.

```c++
#include <vector>
long long sum(std::vector<int> &a) {
	long long ans = 0;
    for (int i = 0; i < a.size(); i++) {
	  ans += a[i];
    }
	return ans;
}
```
