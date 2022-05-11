/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let answer = 0;
    let temp = 0;
    
    nums.forEach((e) => {
        if (e===1)
            temp++;
        else {
            answer = temp > answer? temp : answer
            temp = 0;
    }})
    
    return answer = temp > answer? temp : answer
};