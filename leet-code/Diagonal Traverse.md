# Diagonal Traverse

[LeetCode 문제 링크](https://leetcode.com/problems/diagonal-traverse)

```javascript
class Position {
  static LEFT_TO_RIGHT_DIR = 1;
  static RIGHT_TO_LEFT_DIR = -1;

  static getOpositeDir(dir) {
    return dir * -1;
  }

  constructor(row, col, dir) {
    this.row = row;
    this.col = col;
    this.dir = dir;
  }

  getNextPosition() {
    return new Position(this.row - this.dir, this.col + this.dir, this.dir);
  }
}

class DiagonalOrder {
  constructor(mat) {
    this.initDiagonalOrder(mat);
    this.collectAllElements();
  }

  initDiagonalOrder(mat) {
    this.mat = mat;
    this.list = [];
    this.pos = new Position(0, 0, Position.LEFT_TO_RIGHT_DIR);
  }

  collectAllElements() {
    while (true) {
      this.collectCurrentDiagonalElements(this.list);
      if (this.isFinish(this.pos)) {
        break;
      }

      this.setNextDiagonalStartConfig(this.pos);
    }
  }

  collectCurrentDiagonalElements(list) {
    while (true) {
      const { row, col } = this.pos;
      list.push(this.mat[row][col]);

      const nextPos = this.pos.getNextPosition();
      if (this.isinInvalidPlacement(nextPos)) {
        break;
      }

      this.pos = nextPos;
    }
  }

  isinInvalidPlacement(pos) {
    return pos.row < 0 || pos.row >= this.mat.length || pos.col < 0 || pos.col >= this.mat[0].length;
  }

  isFinish(pos) {
    return pos.row === this.mat.length - 1 && pos.col === this.mat[0].length - 1;
  }

  setNextDiagonalStartConfig(pos) {
    if (pos.dir === Position.LEFT_TO_RIGHT_DIR) {
      this.pos = new Position(pos.row, pos.col + 1, Position.getOpositeDir(pos.dir));
    } else {
      this.pos = new Position(pos.row + 1, pos.col, Position.getOpositeDir(pos.dir));
    }

    if (this.isinInvalidPlacement(this.pos)) {
      this.pos = this.pos.getNextPosition();
    }
  }
}

/**
 * @param {number[][]} nextPos
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const diagonalOrder = new DiagonalOrder(mat);
  return diagonalOrder.list;
};
```
