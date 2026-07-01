class TreeNode{
    value : number;
    left : TreeNode | null;
    right : TreeNode | null;

    constructor(value : number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);


function printNode (root  : TreeNode) : void {
    
}



