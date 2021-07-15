// Create a node
class Node{
  constructor(numb){
    this.data  = numb
    this.nodeL = null
    this.nodeR = null
  }
}

// Create tree
class Tree{
  constructor(){
    this.root  = null
    this.array = [4,2,9,5,1,8,3,7,6]
    this.insertArray()
  }

  // Push all element of an array for create a node
  insertArray(){
    for(const numb of this.array ){
      this.insert(numb)
    }
  }

  // Create a node
  insert(numb){
    const newNode = new Node(numb)

    if(this.root == null){
      this.root = newNode
    }else{
      this.insertNode(this.root,newNode)
    }
  }

  // insert node at the good position
  insertNode(root,newNode){
    if (newNode.data > root.data){
      if(root.nodeR == null){
        root.nodeR = newNode
      }else{
        return this.insertNode(root.nodeR,newNode)
      }
    }else if(newNode.data < root.data){
      if(root.nodeL == null){
        root.nodeL = newNode
      }else{
        return this.insertNode(root.nodeL,newNode)
      }
    }
  }

  // Count levels of the tree
  levels(root){
    if (root == null){
      return 0
    }else{
      return 1 + Math.max(this.levels(root.nodeL),this.levels(root.nodeL))
    }
  }

  // Searche a node with its value
  search(key, root=this.root){
    if(root.data == key){
      return root
    }
    if(root.data < key){
      return this.search(key, root.nodeR);
    }else{
      return this.search(key, root.nodeL)
    }
  }

  // Get an array sorted of the tree
  inOrder(root=this.root,result=[]){
    if(root == null){
      return;
    }
    this.printOrder(root.nodeL, result);
    result.push(root.data);
    this.printOrder(root.nodeR, result);
    return result;
  }

  // Get an array reverse sorted of the tree
  reverseInOrder(root=this.root,result=[]){
    if(root == null){
      return;
    }
    this.reverseInOrder(root.nodeR, result);
    result.push(root.data);
    this.reverseInOrder(root.nodeL, result);
    return result;
  }

  // Get an array "preorder" of the tree
  preOrder(root=this.root,result=[]){
    if(root == null){
      return;
    }
    result.push(root.data);
    this.preOrder(root.nodeL, result);
    this.preOrder(root.nodeR, result);
    return result;
  }

  // Get an array "postorder" of the tree
  postOrder(root=this.root,result=[]){
    if(root == null){
      return;
    }
    this.postOrder(root.nodeL, result);
    this.postOrder(root.nodeR, result);
    result.push(root.data);
    return result;
  }
}

bst = new Tree()
console.log(bst.postOrder())