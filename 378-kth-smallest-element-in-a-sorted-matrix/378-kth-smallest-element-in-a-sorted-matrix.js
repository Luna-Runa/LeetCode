/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arr = []
    matrix.forEach(e => {
        arr.push(...e)
    })
    
    arr.sort((a, b) => a - b)
    
    return arr[--k]
};