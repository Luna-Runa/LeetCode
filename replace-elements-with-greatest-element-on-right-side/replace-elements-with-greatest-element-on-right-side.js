/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = 0;
    let temp = []
    
    for(let i = arr.length - 1; i > 0; i--) {
        if(max < arr[i]) max = arr[i];
    
        temp[i] = max;
    }
    
    temp.shift();
    temp[arr.length-1] = -1
    
    return temp;
};