class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree
class BSTree {
  constructor() {
    this.root = null;
  }

  isTreeEmpty() {
    return this.root === null;
  }

  insertNode(val) {
    let newNode = new Node(val);
    if (this.isTreeEmpty()) {
      this.root = newNode;
    } else {
      this.addToNode(this.root, newNode);
    }
  }

  addToNode(root, node) {
    if (root.value > node.value) {
      if (!root.left) root.left = node;
      else this.addToNode(root.left, node);
    } else {
      if (!root.right) root.right = node;
      else this.addToNode(root.right, node);
    }
  }

  searchNode(root, val) {
    if (!root) return false;
    else if (root.value === val) return true;
    else if (root.value > val) return this.searchNode(root.left, val);
    else return this.searchNode(root.right, val);
  }

  //DFS (Depth First Search)
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  minValue(root) {
    if (root.left) {
      return this.minValue(root.left);
    } else {
      return root.value;
    }
  }

  maxValue(root) {
    if (root.right) {
      return this.maxValue(root.right);
    } else {
      return root.value;
    }
  }

  removeNode(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, val) {
    if (!root) return null;
    else if (root.value > val) root.left = this.deleteNode(root.left, val);
    else if (root.value < val) root.right = this.deleteNode(root.right, val);
    else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        root.value = this.minValue(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
    }
    return root;
  }

  //BFS Breadth First Search
  bfsTraversing() {
    let queue = [this.root];
    while (queue.length) {
      let currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      console.log(currentNode.value);
    }
  }
}

let bst = new BSTree();
bst.insertNode(20);
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(12);
bst.insertNode(50);
bst.insertNode(45);
bst.insertNode(55);
bst.insertNode(52);
// console.log(JSON.stringify(bst));
// console.log(bst.searchNode(bst.root, 13));
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root); //L, R, Root
// bst.bfsTraversing();
// console.log(bst.minValue(bst.root));
// console.log(bst.maxValue(bst.root));
console.log(JSON.stringify(bst));
bst.removeNode(20);
console.log(JSON.stringify(bst));
