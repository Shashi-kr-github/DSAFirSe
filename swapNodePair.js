const {  Node, LinkedList} = require('./linkList');

let L1 = new LinkedList();
L1.add(1);
L1.add(2);
L1.add(3);
L1.add(4);
L1.add(5);
L1.add(6);
L1.add(7);

console.log(L1.head);
console.log(L1.printList());

function swapPairs(L1){
  //console.log(L1);

  let dummy = new Node(0);
  dummy.next = L1.head;

  let pre = dummy;
  while(pre.next != null && pre.next.next != null){
    let first = pre.next;
    let second = first.next;
    let nxtNode = second.next;

    // swap

        first.next = nxtNode;
        second.next = first;
        pre.next = second;

        pre = first;
  }
 
return dummy.next;

  }

 
  //console.log(next, "next");

  //console.log(pre, "pre", curr, "curr");

 swapPairs(L1);
 
console.log(L1.printList());


