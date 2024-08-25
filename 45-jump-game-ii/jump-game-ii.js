/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let left = 0, right = 0, jumps = 0;

    while (right < nums.length - 1) {
        let farthest = 0;
        for (let i = left; i <= right; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        left = right + 1;
        right = farthest;
        jumps++;
    }

    return jumps;    
};