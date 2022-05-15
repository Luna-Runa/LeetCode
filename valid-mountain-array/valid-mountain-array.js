/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3)
        return false;
    
    let prev = -1;
    let ud = 1;
    
    for(let i = 0; i < arr.length; i++) {
        //start but down
        if(arr[0] > arr[1]) {
            console.log(`${prev}, ${arr[i]}, ${ud}, start but down`)
            return false;
        }
        
        //req up but down
        if(ud === 1 && prev > arr[i]) {
            console.log(`${prev}, ${arr[i]}, ${ud}, req up but down. change ud`)
            ud = -1;
        }
        
        //req down but up
        if(ud === -1 && prev < arr[i]) { 
            console.log(`${prev}, ${arr[i]}, ${ud}, req down but up`)
            return false;
        }
        
        //straight
        if(prev === arr[i]) return false;
    
        //req up arr up && req down arr down && not straight
        prev = arr[i];
    }
    
    //ud not reverse = false
    return ud === -1? true: false;
    
};