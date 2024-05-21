/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    // let max=Math.max(...nums)
    // console.log(max)
    // let a
    // for(let i=0;i<nums.lenght;i++){
    //     if(max>=nums[i]*2){
    //        a=nums[i]
    //     }else{
    //         a= -1
    //     }
    // }
    // return a
    let max=Math.max(...nums)
    let halfOfmax=max/2
    const a=nums.find((n)=>n!==max&&n>halfOfmax)
    return a?-1:nums.indexOf(max)
};