/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = "";
    x = x.toString();
    
    for(e of x) 
        reverse = e + reverse;
    
    
    return reverse === x? true: false;
};