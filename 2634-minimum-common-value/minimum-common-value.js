/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {

const set=new Set(nums1)
for(let n of nums2){

    if(set.has(n)){
        return n
    }
}
return -1

};

