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
  
    minDepth() {
      // Helper function for DFS
      function findMinDepth(node) {
        if (!node) {
          // If the node is null, return 0 as it doesn't contribute to the depth.
          return 0;
        }
  
        if (!node.left && !node.right) {
          // If it's a leaf node, return 1.
          return 1;
        }
  
        // Recursive calls to find the minimum depth of left and right subtrees.
        const leftDepth = findMinDepth(node.left);
        const rightDepth = findMinDepth(node.right);
  
        // Return the minimum depth among the left and right subtrees, plus 1 for the current node.
        return Math.min(leftDepth, rightDepth) + 1;
      }
  
      // Start the DFS from the root node.
      return findMinDepth(this.root);
    }
  }
  
  // Create Binary Tree Nodes
  const node1 = new BinaryTreeNode(1);
  const node3 = new BinaryTreeNode(3);
  const node4 = new BinaryTreeNode(4);
  const node5 = new BinaryTreeNode(5);
  const node6 = new BinaryTreeNode(6);
  
  // Build the Binary Tree
  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node3.left = node5;
  
  // Create a BinaryTree instance with the root node
  const binaryTree = new BinaryTree(node1);
  
  // Calculate and print the minimum depth of the binary tree
  const minDepth = binaryTree.minDepth();
  console.log(`Minimum Depth of the Binary Tree: ${minDepth}`);
  