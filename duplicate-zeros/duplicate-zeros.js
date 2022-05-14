/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let answer = [];
    const temp = arr.forEach(num => {
        answer.push(num);
        num === 0? answer.push(num) : '';
    })
    answer = answer.slice(0, arr.length);
    
    let i = 0;
    answer.forEach(num => arr[i++] = num)
};