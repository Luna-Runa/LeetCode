/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let answer = [];
    let temp = {};
    
     if (nums1.legnth < nums2.length) return intersect(nums2, nums1)
    
    nums2.forEach(e => {
        temp[e] = temp[e] + 1 || 1
    })
    
    nums1.forEach(e => {
        if(temp[e] && temp[e] > 0) {
            temp[e] = temp[e] - 1
            answer.push(e)
        }
    })
    
    console.log(temp)
    
    
    
    
    return answer;
    
};