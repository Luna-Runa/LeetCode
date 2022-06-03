/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if(n === 0) return tasks.length;
    
    let map = new Map();
    
    let maxL = 0;
    let maxA = tasks[0];
    
    let getN;
    
    let idle;
    
    tasks.forEach(e => {
        getN = map.get(e);
        getN = getN === undefined? 1 : getN + 1;
        //console.log(getN)
        map.set(e, getN);
        
        if(getN > maxL) {
            maxL = getN;
            maxA = e;
        }
    })
    
    idle = (maxL - 1) * n
    
    //console.log(map, maxL, maxA, idle)
    
    map.forEach((num, char) => {
        if(char === maxA) return;
        if(num === maxL) idle -= (num - 1);
        else idle -= num
        
        //console.log(idle)
    })
    
    return idle <= 0? tasks.length : tasks.length + idle;
    
    
    
};