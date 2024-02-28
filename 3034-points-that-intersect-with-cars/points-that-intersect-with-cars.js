/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    const set = new Set()
    nums.forEach(([i,j])=>{
        while(i<=j){
            set.add(i)
            i++
        }
    })
    return set.size
};