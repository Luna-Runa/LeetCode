/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x)
    let l = x.length - 1;
    console.log(l)
    
    for(let i = 0; i < Math.round(l/2); i++) {
        if(x[i] !== x[l - i]) return false;
    }
    
    return true;
};