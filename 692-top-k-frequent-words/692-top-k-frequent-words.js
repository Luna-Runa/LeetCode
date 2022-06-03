/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let oj = {}
    let answer;
    
    words.forEach(e => {
        oj[e] = (oj[e] || 0) + 1
    })
    
    //console.log(oj)
    
    answer = Object.keys(oj).sort((a, b) => { 
        //console.log(a, b)
        //두개의 빈도수가 같으면
        if (oj[b] === oj[a]) { 
            //알파벳 순으로 나열
            return a > b ? 1 : -1 
        }
        return oj[b] - oj[a]
    })
    
    return answer.slice(0, k)
};