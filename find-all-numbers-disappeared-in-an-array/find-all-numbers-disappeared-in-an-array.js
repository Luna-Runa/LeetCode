/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let l = nums.length;
    let answer = [];
    nums = [...new Set(nums)].sort((a, b) => a - b);
    
    let j = 0;
    
    for(let i = 0; i < l; i++) {
        if(nums[j] !== i + 1) answer.push(i + 1);
        else  j++; 
    }
    
    
    return answer;
    
};