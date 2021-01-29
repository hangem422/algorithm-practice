# 이진 트린

## 1. 이진 검색 트리

```javascript
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(arr) {
    this.root = null;

    if (Array.isArray(arr)) {
      arr.forEach((value) => this.insert(value));
    }
  }

  insert(value) {
    const node = new BinaryTreeNode(value);
    let cur = this.root;

    function moveNext(dir) {
      if (cur[dir]) {
        cur = cur[dir];
      } else {
        cur[dir] = node;
        cur = null;
      }
    }

    if (!cur) this.root = node;

    while (cur) {
      if (cur.value > value) moveNext("left");
      else if (cur.value < value) moveNext("right");
      else cur = null;
    }

    return node;
  }

  find(value) {
    let node = this.root;

    while (node) {
      if (node.value > value) node = node.left;
      else if (node.value < value) node = node.right;
      else break;
    }

    return node;
  }

  remove(value) {
    function findMin(node) {
      const cur = node;
      while (cur.left) cur = cur.left;
      return cur;
    }

    function deleteRecursibely(node) {
      if (!node) return null;

      if (value < node.value) {
        node.left = deleteRecursibely(node.left);
      } else if (value > node.value) {
        node.right = deleteRecursibely(node.right);
      } else {
        if (!(node.left && node.right)) return node.left || node.right;

        value = findMin(node.right).value;
        node.value = value;
        node.right = deleteRecursibely(node.right);
      }
    }

    return deleteRecursibely(this.root);
  }
}
```

## 2. Red-Black Tree

```javascript
class RedBlackTreeNode {
  static BLACK = 0;
  static RED = 1;

  constructor(value) {
    this.value = value;
    this.color = RedBlackTreeNode.BLACK;

    this.left = null;
    this.right = null;
    this.parent = null;
  }

  get isRed() {
    return this.color === RedBlackTreeNode.RED;
  }

  get isBlack() {
    return this.color === RedBlackTreeNode.BLACK;
  }
}

class RedBlackTree {
  constructor(arr) {
    this.root = null;

    if (Array.isArray(arr)) {
      arr.forEach((value) => this.insert(value));
    }
  }

  rotateLeft(node) {
    const right = node.right;

    node.right = right.left;
    if (right.left) right.left.parent = node;

    right.parent = node.parent;
    if (node.parent) {
      if (node === node.parent.left) node.parent.left = right;
      else node.parent.right = right;
    } else {
      this.root = right;
    }

    right.left = node;
    node.parent = right;
  }

  rotateRight(node) {
    const left = node.left;

    node.left = left.right;
    if (left.right) left.right.parent = node;

    left.parent = node.parent;
    if (node.parent) {
      if (node === node.parent.right) node.parent.right = left;
      else node.parent.left = left;
    } else {
      this.root = left;
    }

    left.right = node;
    node.parent = left;
  }

  restructure(node) {
    function recolor(uncle) {
      node.parent.color = RedBlackTreeNode.BLACK;
      uncle.color = RedBlackTreeNode.BLACK;
      node.parent.parent.color = RedBlackTreeNode.RED;
      node = node.parent.parent;
    }

    while (node.parent && node.parent.isRed) {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;

        if (uncle === null || uncle.isBlack) {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }

          node.parent.color = RedBlackTreeNode.BLACK;
          node.parent.parent.color = RedBlackTreeNode.RED;
          this.rotateRight(node.parent.parent);
        } else {
          recolor(uncle);
        }
      } else {
        const uncle = node.parent.parent.left;

        if (uncle === null || uncle.isBlack) {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }

          node.parent.color = RedBlackTreeNode.BLACK;
          node.parent.parent.color = RedBlackTreeNode.RED;
          this.rotateLeft(node.parent.parent);
        } else {
          recolor(uncle);
        }
      }
    }

    this.root.color = RedBlackTreeNode.BLACK;
  }

  find(value) {
    let node = this.root;

    while (node) {
      if (node.value > value) node = node.left;
      else if (node.value < value) node = node.right;
      else break;
    }

    return node;
  }

  insert(value) {
    const node = new RedBlackTreeNode(value);

    if (this.root === null) {
      this.root = node;
      return node;
    }

    let parent = this.root;
    node.color = RedBlackTreeNode.RED;

    while (true) {
      if (parent.value > value) {
        if (parent.left === null) {
          parent.left = node;
          node.parent = parent;
          break;
        } else {
          parent = parent.left;
        }
      } else if (parent.value < value) {
        if (parent.right === null) {
          parent.right = node;
          node.parent = parent;
          break;
        } else {
          parent = parent.right;
        }
      } else {
        return parent;
      }
    }

    this.restructure(node);
    return node;
  }
}
```
