/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max
    for(let i = 0; i < arr.length; i++) {
        max = 0;
    
        for(let j = i + 1; j < arr.length; j++) 
            if(max < arr[j]) max = arr[j]
        
        arr[i] = max;
    }
    arr[arr.length-1] = -1;
    
    return arr;
};