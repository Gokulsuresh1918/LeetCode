/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let hash={}
    let currenthigh=0
    let count=0
    for(let n of nums){
        hash[n]=1+(hash[n]||0)
        if(hash[n]>count){
currenthigh=n
count=hash[n]
        }
    }
    return currenthigh
};