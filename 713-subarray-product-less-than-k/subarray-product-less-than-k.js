/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0;

  let left = 0, right = 0, product = 1, count = 0;
  const n = nums.length;

  while (right < n) {
    product *= nums[right];
    while (product >= k) product /= nums[left++];
    count += 1 + (right - left);
    right++;
  }

  return count;
};