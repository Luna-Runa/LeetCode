/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = nums.length;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && nums[j] != '_') {
                nums[j] = '_';
                k--;
            }
        }
    }
    nums.sort()
    nums.length = k;
    nums.sort((a, b) => a - b)
    
    return k
};