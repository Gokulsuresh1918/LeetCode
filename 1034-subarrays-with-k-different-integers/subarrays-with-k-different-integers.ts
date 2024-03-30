function subarraysWithKDistinct(nums: number[], k: number): number {
    if (nums.length === 1) {
        return Number(k === 1)
    }
    
    // initialize state
    const freq = new Map<number, number>([[nums[0], 1]])
    let left = 0
    let right = 1
    let total = k === 1 ? 1 : 0
    freq.set(nums[1], (freq.get(nums[1]) || 0) + 1)
    
    // track current number of prefixes with k distinct values
    let prefixes = 1
    
    function decrementMap(num: number): void {
        freq.set(num, freq.get(num) - 1)
        if (!freq.get(num)) {
            freq.delete(num)
        }
    }
    
    while (right < nums.length) {
        if (freq.size === k) {
            if (freq.get(nums[left]) > 1) {
                // we can remove this value and keep freq.size === k
                // increment prefixes
                prefixes++
                
                // remove value from left side of subarray
                decrementMap(nums[left])

                left++
            } else {
                // collect on prefixes
                total += prefixes
                right++
                freq.set(nums[right], (freq.get(nums[right]) || 0) + 1)
            }
        } else if (freq.size < k) {
            // keep expanding right, looking for new unique values
            right++
            freq.set(nums[right], (freq.get(nums[right]) || 0) + 1)
        } else {
            // too many distinct values, reset prefixes, start moving left pointer to drop distinct values
            prefixes = 1

            decrementMap(nums[left])
            left++            
        }
    }
    
    return total
};