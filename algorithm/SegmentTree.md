# 세그먼트 트리

```javascript
class SegmentTree {
  constructor(origin) {
    const me = this;

    const exp = Math.ceil(Math.log2(origin.length)) + 1;
    const nodeCnt = 1 << exp;

    me.origin = origin;
    me.nodes = Array(nodeCnt);

    function closureInit(node, start, end) {
      if (start === end) {
        me.nodes[node] = me.origin[start];
      } else {
        const mid = Math.floor((start + end) / 2);
        const leftNodeVal = closureInit(node * 2, start, mid);
        const rightNodeVal = closureInit(node * 2 + 1, mid + 1, end);
        me.nodes[node] = leftNodeVal + rightNodeVal;
      }

      return me.nodes[node];
    }

    closureInit(1, 0, me.origin.length - 1);
  }

  update(index, value) {
    const me = this;

    const diff = value - me.origin[index];
    me.origin[index] = value;

    function closureUpdate(node, start, end) {
      if (index < start || index > end) return;
      me.nodes[node] += diff;

      if (start !== end) {
        const mid = Math.floor((start + end) / 2);
        closureUpdate(node * 2, start, mid);
        closureUpdate(node * 2 + 1, mid + 1, end);
      }
    }

    closureUpdate(1, 0, me.origin.length - 1);
  }

  sum(left, right) {
    const me = this;

    function clouserSum(node, start, end) {
      if (left > end || right < start) return 0;
      if (left <= start && end <= right) return me.nodes[node];

      const mid = Math.floor((start + end) / 2);
      const leftSum = clouserSum(node * 2, start, mid);
      const rightSum = clouserSum(node * 2 + 1, mid + 1, end);
      return leftSum + rightSum;
    }

    return clouserSum(1, 0, me.origin.length - 1);
  }
}
```
