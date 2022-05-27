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
    
    if(head === null) return head
    even = head.next;
    
    while(head.next !== null && even.next !== null) {
        
        let temp = head.next;
        
        head.next = head.next.next
        
        if (head.next !== null) {
            head = head.next;
            temp.next = head.next;
        }
    }
    
    head.next = even;
    
    return root;
};