# 이진 트린

## 1. 이진 트리 순회

```javascript
class BinaryTreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this._root = null;
  }

  // 선순위 순회
  traversePreOreder(node = this._root) {
    if (node instanceof BinaryTreeNode) {
      console.log(node.value);
      if (node.left) this.traversePreOreder(node.left);
      if (node.right) this.traversePreOreder(node.right);
    }
  }

  // 재귀를 사용하지 않는 선순위 순회
  traversePreOrederIterative(node = this._root) {
    const nodeStack = [];
    if (node instanceof BinaryTreeNode) nodeStack.push(node);

    while (nodeStack.length > 0) {
      const cur = nodeStack.pop();
      console.log(cur.value);

      if (cur.right) nodeStack.push(cur.right);
      if (cur.left) nodeStack.push(cur.left);
    }
  }

  // 중순위 순회
  traverseInOrder(node = this._root) {
    if (node instanceof BinaryTreeNode) {
      if (node.left) this.traverseInOrder(node.left);
      console.log(node.value);
      if (node.right) this.traverseInOrder(node.right);
    }
  }

  // 재귀를 사용하지 않는 중순위 선회
  traverseInOrderOterative(node = this._root) {
    const cur = node;
    const stack = [];

    while (true) {
      if (cur !== null) {
        stack.push(cur);
        cur = cur.left;
        continue;
      }

      if (stack.length > 0) {
        cur = stack.pop();
        console.log(cur.value);
        cur = cur.right;
        continue;
      }

      break;
    }
  }

  // 후순위 선회
  traversePostOrder(node = this._root) {
    if (node instanceof BinaryTreeNode) {
      if (node.left) this.traversePostOrder(node.left);
      if (node.right) this.traversePostOrder(node.right);
      console.log(node.value);
    }
  }

  // 재귀를 사용하지 않는 후순위 순회
  traversePostOrderIterative(node = this._root) {
    const stack1 = [];
    const stack2 = [];
    if (node instanceof BinaryTreeNode) stack1.push(node);

    while (stack1.length > 0) {
      const cur = stack1.pop();
      stack2.push(cur.value);

      if (cur.left) stack1.push(cur.left);
      if (cur.right) stack1.push(cur.right);
    }

    while (stack2.length > 0) {
      console.log(stack2.pop());
    }
  }
}
```

## 2. 이진 검색 트리

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

## 3. Red-Black Tree

DELETE 하는 과정을 충분히 이해하지 못해, `deleteFixup` 과정에서 `sibiling`이 `NIL`이 되어 `TypeError`가 발생하는 에러가 존재한다.

```javascript
class Node {
  static BLACK = 0;
  static RED = 1;

  static NIL = new Node();

  static createNode(value, parent) {
    const node = new Node(value, parent);
    node.left = Node.NIL;
    node.right = Node.NIL;

    return node;
  }

  constructor(value = null, parent = null) {
    this.value = value;
    this.color = Node.BLACK;

    this.left = null;
    this.right = null;
    this.parent = parent;
  }

  get isRed() {
    return this.color === Node.RED;
  }

  get isBlack() {
    return this.color === Node.BLACK;
  }

  get isNil() {
    return this === Node.NIL;
  }
}

class RedBlackTree {
  constructor() {
    this.root = Node.NIL;
    this.size = 0;
  }

  clear() {
    this.root = Node.NIL;
    this.size = 0;
  }

  isRoot(node) {
    return this.root === node;
  }

  isLeftChild(node) {
    if (this.isRoot(node)) return false;
    return node.parent.left === node;
  }

  isRightChild(node) {
    if (this.isRoot(node)) return false;
    return node.parent.right === node;
  }

  minNode(node = this.root) {
    if (this.size === 0) return null;

    while (!node.left.isNil) {
      node = node.left;
    }

    return node;
  }

  maxNode(node = this.root) {
    if (this.size === 0) return null;

    while (!node.right.isNil) {
      node = node.right;
    }

    return node;
  }

  transplant(target, replace) {
    if (this.isRoot(target)) this.root = replace;
    else if (this.isLeftChild(target)) target.parent.left = replace;
    else target.parent.right = replace;

    if (!replace.isNil) replace.parent = target.parent; // nil no parent
  }

  rotateLeft(node) {
    const right = node.right;

    node.right = right.left;
    if (!right.left.isNil) right.left.parent = node;

    right.parent = node.parent;

    if (this.isRoot(node)) this.root = right;
    else if (this.isLeftChild(node)) node.parent.left = right;
    else node.parent.right = right;

    right.left = node;
    node.parent = right;
  }

  rotateRight(node) {
    const left = node.left;

    node.left = left.right;
    if (!left.right.isNil) left.right.parent = node;

    left.parent = node.parent;

    if (this.isRoot(node)) this.root = left;
    else if (this.isRightChild(node)) node.parent.right = left;
    else node.parent.left = left;

    left.right = node;
    node.parent = left;
  }

  insertFixup(node) {
    while (!this.isRoot(node) && node.parent.isRed) {
      if (this.isLeftChild(node.parent)) {
        let uncle = node.parent.parent.right;

        if (uncle.isRed) {
          node.parent.color = Node.BLACK;
          node.parent.parent.color = Node.RED;
          uncle = Node.BLACK;

          node = node.parent.parent;
        } else {
          if (this.isRightChild(node)) {
            node = node.parent;
            this.rotateLeft(node);
          }

          node.parent.color = Node.BLACK;
          node.parent.parent.color = Node.RED;
          this.rotateRight(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;

        if (uncle.isRed) {
          node.parent.color = Node.BLACK;
          node.parent.parent.color = Node.RED;
          uncle = Node.BLACK;

          node = node.parent.parent;
        } else {
          if (this.isLeftChild(node)) {
            node = node.parent;
            this.rotateRight(node);
          }

          node.parent.color = Node.BLACK;
          node.parent.parent.color = Node.RED;
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = Node.BLACK;
  }

  deleteFixup(node) {
    while (!this.isRoot(node) && node.isBlack) {
      if (this.isLeftChild(node)) {
        let sibling = node.parent.right;

        if (sibling.isRed) {
          sibling.color = Node.BLACK;
          node.parent.color = Node.RED;

          this.rotateLeft(node.parent);
          sibling = node.parent.right;
        }

        if (sibling.left.isBlack && sibling.right.isBlack) {
          sibling.color = Node.RED;
          node = node.parent;
        } else if (sibling.right.isBlack) {
          sibling.color = Node.RED;
          sibling.left.color = Node.BLACK;

          this.rotateRight(sibling);
          sibling = node.parent.right;
        }

        if (sibling.right.isRed) {
          sibling.color = node.parent.color;
          sibling.right.color = Node.BLACK;
          node.parent.color = Node.BLACK;

          this.rotateLeft(node.parent);
          node = this.root;
        }
      } else {
        let sibling = node.parent.left;

        if (sibling.isRed) {
          sibling.color = Node.BLACK;
          node.parent.color = Node.RED;

          this.rotateRight(node.parent);
          sibling = node.parent.left;
        }

        if (sibling.isNil) throw new ReferenceError();

        if (sibling.left.isBlack && sibling.right.isBlack) {
          sibling.color = Node.RED;
          node = node.parent;
        } else if (sibling.left.isBlack) {
          sibling.color = Node.RED;
          sibling.right.color = Node.BLACK;

          this.rotateLeft(sibling);
          sibling = node.parent.left;
        }

        if (sibling.left.isRed) {
          sibling.color = node.parent.color;
          sibling.left.color = Node.BLACK;
          node.parent.color = Node.BLACK;

          this.rotateRight(node.parent);
          node = this.root;
        }
      }
    }

    node.color = Node.BLACK;
  }

  find(value) {
    let node = this.root;

    while (!node.isNil) {
      if (node.value > value) node = node.left;
      else if (node.value < value) node = node.right;
      else break;
    }

    return node.isNil ? null : node;
  }

  insert(value) {
    const node = Node.createNode(value);

    if (this.root.isNil) {
      this.root = node;
    } else {
      let current = this.root;
      let parent = null;

      while (!current.isNil) {
        parent = current;

        if (value > current.value) current = current.right;
        else current = current.left;
        // else if (value < current.value) current = current.left;
        // else return current;
      }

      node.parent = parent;
      node.color = Node.RED;

      if (value > parent.value) parent.right = node;
      else parent.left = node;

      this.insertFixup(node);
    }

    this.size += 1;

    return node;
  }

  // target: 실제 삭제가 발생하여, 빈 자리를 직계 자식 노드로 대체해야하는 곳의 원래 노드
  // targetColor: 실제 삭제가 발생하여, 빈 자리를 직계 자식 노드로 대체해야하는 곳의 원래 노드
  // child: 실제 삭제가 발생하여, 빈 자리를 대체하는 직계 자식 노드
  deleteNode(node) {
    let target = node;
    let targetColor = target.color;
    let child = null;

    if (node.left.isNil) {
      child = target.right;
      this.transplant(target, target.right);
    } else if (node.right.isNil) {
      child = target.left;
      this.transplant(target, target.left);
    } else {
      target = this.minNode(node.right);
      targetColor = target.color;
      child = target.right;

      this.transplant(target, target.right);
      this.transplant(node, target);

      target.color = node.color;
      target.right = node.right;
      target.right.parent = target;
      target.left = node.left;
      target.left.parent = left;
    }

    if (!child.isNil && targetColor === Node.BLACK) {
      this.deleteFixup(child);
    }

    this.size -= 1;
  }

  delete(value) {
    const node = this.find(value);
    if (node) this.removeNode(node);

    return node;
  }
}

const t = +input[0];
const tree = new RedBlackTree();
const ans = [];

const ops = {
  I(num) {
    tree.insert(num);
  },
  D(num) {
    const node = num > 0 ? tree.maxNode() : tree.minNode();
    if (node) tree.deleteNode(node);
  },
};

for (let i = 0, s = 1; i < t; i += 1) {
  const k = +input[s];
  const next = s + k + 1;

  tree.clear();

  for (let j = s + 1; j < next; j += 1) {
    const [op, param] = input[j].split(" ");
    ops[op](+param);
  }

  if (tree.size === 0) ans[ans.length] = "EMPTY";
  else ans[ans.length] = `${tree.maxNode().value} ${tree.minNode().value}`;
  s = next;
}

console.log(ans.join("\n"));
```
