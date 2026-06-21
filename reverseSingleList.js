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




}

let list = new LinkedList();
list.add(1);
list.add(13);
list.add(14);
list.add(15);

console.log(list, "nnnn");
//console.log(list.head.next.next)

function reverseList(head){
    let pre = null;
    let curr = head;

while(curr != null){
     let nxt = curr.next;
        curr.next = pre;
        pre = curr;
        curr = nxt
}

return pre;
}

list.head = reverseList(list.head);
 console.log(list, "mmmmmmmmm");
//console.log(list.head.next.next)

