/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let answer = 0;
    let temp = 0;
    
    nums.forEach((e) => {
        while(e / 10 >= 1) {
            temp++;
            e = e / 10
        }
        
        
        
        if (temp != 0 && temp % 2 === 1)
            answer++
        
         console.log(e, temp, answer)
        
        temp = 0;
    
    })
    
    return answer;
};