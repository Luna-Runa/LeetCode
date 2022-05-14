/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    ([...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b)).forEach(e => nums1[i++] = e)
    
    
};