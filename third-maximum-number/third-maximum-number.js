/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    nums = [...new Set(nums)];
    
    nums.sort((a, b) => a - b);
    
   return nums[nums.length - 3] !== undefined ? nums[nums.length - 3] : nums[nums.length - 1]
    
};