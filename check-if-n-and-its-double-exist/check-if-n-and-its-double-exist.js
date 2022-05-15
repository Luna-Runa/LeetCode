/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let answer = false
    
    arr.sort((a, b) => a - b)
    
    arr.forEach((e, index) => {
        if (arr.includes(e * 2)) {
            if (e !== 0) answer = true;
            else if (arr[index+1] === 0) answer = true
        }
    })
    
    return answer
    
};