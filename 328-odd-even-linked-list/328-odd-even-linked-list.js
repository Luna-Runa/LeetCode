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
var oddEvenList = function(head) {
    
    root = head;
    
    if (!head) return head;

    evenRoot = head.next;
    even = evenRoot
    
    while(head.next && even.next) {
        head.next = head.next.next;
        even.next = even.next.next;
        
        head = head.next;
        even = even.next;
    }
    
    head.next = evenRoot;
    
    return root;
};