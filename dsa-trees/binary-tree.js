/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }







  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */


  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  nextLarger(lowerBound) {
   
    if(!this.root) {
      return null;
    }
    let smallestLarger = null; // Initialize the result to null
    let currentNode = this.root; // Start from the root

    while(currentNode) {
      if(currentNode.val > lowerBound) {
        if(!smallestLarger || currentNode.val < smallestLarger) {
          smallestLarger = currentNode.val; // Update the result if necessary
        }
        currentNode = currentNode.left;
      }else{
        currentNode = currentNode.right
      }
      return smallestLarger;
    }

  }

 

  minDepth() {
   if(root===null){
    return 0;
   }
   if(root.left===null && root.right===null){
    return 1;
   }
   if(root.left===null){
    return 1+ minDepth(right.root);
   }
   if(this.root.right===null){
    return 1+ this.minDepth(left.root)
   }
   return Math.min(minDepth(root.left), minDepth(root.right));
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(root===null){
      return 0;
     }
     if(root.left===null && root.right===null){
      return 1;
     }
     if(root.left===null){
      return 1+ maxDepth(right.root);
     }
     if(this.root.right===null){
      return 1+ this.maxDepth(left.root)
     }
     return Math.max(maxDepth(root.left), maxDepth(root.right));
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if(node === nul) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(0, leftSum + node.val, rightSum + node.val);
    }
    maxSumHelper(this.root);
    return result;
  }



  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === this.root || node2 === this.root) return false;

    function findLevelAndParent(
      nodeToFind,
      currentNode,
      level = 0,
      data = { level: 0, parent: null }
    ) {
      if (data.parent) return data;
      if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = currentNode;
      }
      if (currentNode.left) {
        findLevelAndParent(nodeToFind, currentNode.left, level + 1, data);
      }
      if (currentNode.right) {
        findLevelAndParent(nodeToFind, currentNode.right, level + 1, data);
      }
      return data;
    }

    let node1Info = findLevelAndParent(node1, this.root);
    let node2Info = findLevelAndParent(node2, this.root);

    let sameLevel =
      node1Info && node2Info && node1Info.level === node2Info.level;
    let differentParents =
      node1Info && node2Info && node1Info.parent !== node2Info.parent;
    return sameLevel && differentParents;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
      const values= [];

      function traverse(node) {
        if (node) {
          values.push(node.val);
          traverse(node.left);
          traverse(node.right);
        } else{
          values.push("#");
        }
      }
      traverse(tree.root);
      return values.join(" ");
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
      if(!stringTree) return null;

      const values = stringTree.split(" ");

      function buildTree() {
        if(values.length) {
          const currentVal = values.shift();
          if(currentVal === "#") return null;

          let currentNode = new BinaryTreeNode(+currentVal);
          currentNode.left = buildTree();
          currentNode.right = buildTree();
          return currentNode;
        }
      }
      const root = buildTree();
      return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    if(currentNode == null) return null;
    if(currentNode === node1 || currentNode === node2) return currentNode;
    const left = this.lowestCommonAncestor(node1, node2, currentNode.left); 
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);
    if(left !== null && right!== null) return currentNode;
    if(left !== null || right!== null) return left || right;
    if(left === null && right === null) return null;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
