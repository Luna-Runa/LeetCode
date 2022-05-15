/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = nums.length;
    let prev = -101;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === prev) {
            nums[i] = '_';
            k--;
        }
        else prev = nums[i];
    }
    
    nums.sort();
    nums.length = k;
    nums.sort((a, b) => a - b);
    
    return k
};