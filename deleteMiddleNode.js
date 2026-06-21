/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {

    if (head === null || head.next === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    let preSlow = null;
    

    while(fast != null && fast.next != null){
        preSlow = slow;
        fast = fast.next.next;
        slow = slow.next;

    }
     
    preSlow.next = slow.next;
    slow.next = null;
    return head;
    
};