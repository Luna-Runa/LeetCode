/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    //pushed에 있는걸 차례대로 푸시
    //popped랑 같으면 pop
    
    //popped에 있는 요소와 같을때까지 push
    //다 푸쉬했는데 없으면 false
    
    let i = 0;
    let j = 0;
    let l = pushed.length;
    
    
    while(pushed.length !== 0) {
        //모든 요소를 푸시했고 마지막 요소가 popped와 다르면
        if (i === pushed.length-1 && pushed[i] !== popped[j]) return false;
        
        //푸시해야할 요소와 팝할 요소가 같으면
        if (pushed[i] === popped[j]) {
            j++;
            pushed.splice(i--, 1);
        } else i++;
    }
    
    return true;
};