/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0;
    let nd = false;
   
    if(nums.length < 2)
        return nums.map(e => e *= e)
    
    while(i < nums.length) {
        if(nums[i] <= nums[i+1]) {
            nd = true;
            break;
        }
        i++;
    }

    if(nd === true) {
        let answer = nums.map(e => e *= e)
        answer.sort((a, b) => a - b);
        return answer;
    }
    
};