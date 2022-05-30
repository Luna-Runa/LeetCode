/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let i;
    
    while(left <= right) {
        i = Math.floor((left + right)/2);
    
        console.log(nums, left, i, right, target)
        console.log("->")
        
        if(nums[i] === target) return i;
        
        if(nums[i] < target) {
            //범위에서 벗어나는 상황 (초과)
            if (i + 1 > nums.length - 1) return nums.length;
            //중간에서 left와 right가 바뀌는 상황 (넣을 곳 찾음)
            else if (i + 1 > right) return i;
            else left = i + 1;
        }
        else if (nums[i] > target) {
            //범위에서 벗어나는 상황 (미만)
            if (i - 1 < 0) return 0;
            //중간에서 right가 left와 바뀌는 상황 (넣을 곳 찾음)
            else if (i - 1 < left) return i;
            else right = i - 1;
        }
        
        console.log(nums, left, i, right, target)
        
        if(left === right) {
            if(nums[left] < target) return left + 1;
            else return left;
        }
    }
};