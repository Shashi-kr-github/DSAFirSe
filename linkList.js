class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(value){
      let newNode = new Node(value);
      if(this.head == null){
        this.head = newNode
      }else{
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }

        curr.next = newNode;
        
      }

      this.size++;

    }

    // prePend means add at the begining of this list;

    prepend(value){
        let newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }

    }

    delete(value){
        let curr = this.head;
        let prev = null;
      
        while(curr != null &&curr.value != value){
            prev = curr;
            curr = curr.next;
        }
        if(curr == null){
            prev.next =  null;
            this.size--;
        }else{
            prev.next = curr.next;
            this.size--;
        }

        return;
    }

    printList(){
        let curr = this.head;
        let res = "";

        while(curr != null) {
            res += curr.value + " ";
            curr = curr.next;
        }
        console.log(res);
    }




}

module.exports = {
    Node,
    LinkedList
};







