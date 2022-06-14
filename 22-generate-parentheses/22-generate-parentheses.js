/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];
    
    if(n === 1) return ["()"]
    
    function dfs(text, l, r) {
        if(text.length === 2 * n) {
            answer.push(text);
            return;
        }
        
        if(l < n) dfs(text+"(", l+1, r)
        
        if(r < l) dfs(text+")", l, r+1)
    }
    
    dfs("", 0, 0)
    
    return answer; 
};