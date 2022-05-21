/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    let temp;
    
    while(true) {
        temp = nums.findIndex(e => e === 0);
        if (temp === -1) break;
        else {
            count++;
            nums.splice(temp, 1)
        }
    }
    
    if(count > 0)
        for(let i = 0; i < count; i++)
            nums.push(0)
    
};