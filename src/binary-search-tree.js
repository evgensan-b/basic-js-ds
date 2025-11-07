// const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootstock = null;
  }

  root() {
    // Remove line below and write your code here
    return this.rootstock;
  }

  add(data) {
    // Remove line below and write your code here
    this.rootstock = this._addNode(this.rootstock, data);
  }

  _addNode(node, data) {
    if (!node) return new Node(data);
    if (node.data === data) return node;

    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else {
      node.right = this._addNode(node.right, data);
    }
    
    return node;
  }

  find(data) {
    // Remove line below and write your code here
    return this._searchNode(this.rootstock, data);
  }

  _searchNode(node, data) {
    if (!node) return null;
    if (node.data === data) return node;

    if (data < node.data) {
      return this._searchNode(node.left, data);
    } else {
      return this._searchNode(node.right, data);
    }
  }

  has(data) {
    // Remove line below and write your code here
    return this._searchNode(this.rootstock, data) !== null;
  }

  remove(data) {
    // Remove line below and write your code here
    this.rootstock = this._removeNode(this.rootstock, data);
  }

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      
      if (!node.left) {
        return node.right;
      }
      
      if (!node.right) {
        return node.left;
      }

      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);

      return node;
    }
  }

  min() {
    // Remove line below and write your code here
    if (!this.rootstock) return null;

    let node = this.rootstock;
    while (node.left) {
      node = node.left;
    }
    
    return node.data;
  }

  max() {
    // Remove line below and write your code here
    if (!this.rootstock) return null;

    let node = this.rootstock;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};