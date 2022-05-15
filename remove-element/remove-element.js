/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = nums.length;
    
    const findIndex = () => nums.findIndex((e) => e === val)
    
    while(findIndex() !== -1) {
        nums[findIndex()] = '_';
        l--;
        }
    
    nums.sort();
    
    return l;
};