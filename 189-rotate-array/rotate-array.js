/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k=k%nums.length
reverse(nums,0,nums.length-1)
reverse(nums,0,k-1)
reverse(nums,k,nums.length-1)
};
function reverse(nums,start,end){
    while(start<end){
        const temp=nums[end]
        nums[end]=nums[start]
        nums[start]=temp
        start++
        end--
    }
}