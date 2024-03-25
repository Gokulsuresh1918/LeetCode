/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let demo = []
    let result=[]
    for(let i=0;i<=nums.length;i++){
        if(demo.includes(nums[i])){
            result.push(nums[i])
        }else{
            demo.push(nums[i])
        }
    }
    return result
};