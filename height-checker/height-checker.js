/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
    let k = 0;
    origin = Object.assign([], heights)
    heights.sort((a, b) => a - b)
    
    heights.forEach((e, i) => {
        if(e !== origin[i])
            k++;
    })
    
    return k;
};