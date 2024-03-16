/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  const hash = {};
  let max_length = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current === 0) {
        // if the current element is 0, then we decrement the count
      count--;
    } else if (current === 1) {
        // if the current element is 1, then we increment the count
      count++;
    }

    if (count === 0) {
        // if the count is equal to o then we have a contiguous subarray of length equal to i+1
      max_length = i + 1;
    }
    if (count in hash) {
    
      max_length = Math.max(max_length, i - hash[count]); // update our max length
    } else {
      hash[count] = i;
    }

  }
  return max_length;
};