// Breadth First Search using Iterative and Recursive Approach
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Go Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Go Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {}

  remove(value) {}

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }

  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }

  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

//        9
//   4          6
// 20  170    15   1

// Inorder = [1, 4, 6, 9, 15, 20, 170]
// Preorder = [9, 4, 1, 6, 20, 15, 170]
// Postorder = [1, 6, 4, 15, 170, 20, 9]

console.log('Inorder: ', tree.DFSInOrder());
console.log('Preorder: ', tree.DFSPreOrder());
console.log('Postorder: ', tree.DFSPostOrder());

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
