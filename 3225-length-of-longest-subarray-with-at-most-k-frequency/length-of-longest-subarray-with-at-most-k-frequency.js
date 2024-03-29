/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let i = 0;
    let j = 0;
    let n = nums.length;
    let ans = 1;
    let map = new Map();

    while (i < n) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        while (map.get(nums[i]) > k) {
            map.set(nums[j], map.get(nums[j]) - 1);
            j++;
        }
        ans = Math.max(ans, i - j + 1);
        i++;
    }
    return ans;
};