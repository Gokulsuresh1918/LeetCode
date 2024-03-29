/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countSubarrays(nums, k) {
    let n = nums.length; // Number of elements in the input array
    let maxi = Math.max(...nums); // Maximum value in the array
    let i = 0, j = 0, cnt = 0, ans = 0; // Initialize pointers and counters

    for (j = 0; j < n; j++) {
        if (nums[j] === maxi) {
            cnt++; // Increment count when the element is equal to the maximum value
        }
        if (cnt >= k) {
            // Slide the window from the left side and count subarrays containing the maximum element
            for (; cnt >= k; i++) {
                ans += n - j; // Count subarrays where maximum element is from j to n-1
                if (nums[i] === maxi) {
                    cnt--; // Decrease count as the window slides
                }
            }
        }
    }
    return ans; // Return the total count of subarrays
}

