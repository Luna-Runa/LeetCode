/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let a = nums.findIndex(e => e === target);
    
    if (a !== -1) return a;
    else {
        nums.push(target);
        nums.sort((a, b) => a - b)
        a = nums.findIndex(e => e === target);
        return a;
    }
};