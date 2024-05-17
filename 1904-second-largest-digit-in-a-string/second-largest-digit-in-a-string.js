/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
 let arr=new Set()
 for(let val of s){
    if(!isNaN(val)){
        arr.add(parseInt(val))
    }
 } 
    let sorted=Array.from(arr).sort((a,b)=>b-a)
 return sorted.length<=1?-1:sorted[1]
};