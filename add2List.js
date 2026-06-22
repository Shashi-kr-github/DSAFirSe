const {  Node, LinkedList} = require('./linkList');


let L1 = new LinkedList();
L1.add(9);
L1.add(9);
L1.add(9);
L1.add(9);
L1.add(9);
L1.add(9);
L1.add(9);

let L2 = new LinkedList();
L2.add(9);
L2.add(9);
L2.add(9);
L2.add(9);

console.log(L1.head, "nnnn", L2.head);
// //console.log(list.head.next.next)

function addTwoNumbers (l1, l2) {
    let res = "";
    

    let carry = 0;
    let l1isBig = false;
    let l2isBig = false;
    while(l1 != null && l2 != null){
        let c1 = l1.value;
        let c2 = l2.value;

        let sum = c1 + c2 + carry;
        if(sum >= 10){
            let val = sum %10;
            carry = 1;
            res += val;
        }else{
            let val = sum
           res += val;
           carry = 0;
        }

       l1 = l1.next;
        l2 = l2.next;
    }

    while(l1 != null){
        l1isBig = true;
        let sum = carry + l1.value;
         if(sum >= 10){
            let val = sum %10;
            carry = 1;
            res += val;
        }else{

          res += sum;
          carry = 0;
        }

       l1 = l1.next;


    }

    while(l2 != null){
        l2isBig = true;
        let sum = carry + l2.value;
         if(sum >= 10){
            let val = sum %10;
            carry = 1;
              res += val;
        }else{
           res += sum;
           carry = 0;
        }

       l2 = l2.next;


    }

    if(carry > 0){
        res += carry;
    }


    console.log(carry)
    console.log(res.split("").map(Number));

let resList = new LinkedList();
 for(let i = 0; i < res.length; i++){
    resList.add(res[i]);
 }

 console.log(resList);
    
};

addTwoNumbers(L1.head, L2.head);
