/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let odd;
    let even = [];
    
    odd = nums.filter(e => {
        if (e % 2) return e;
        even.push(e)
    })
    
    return [...even, ...odd]
    
    

};