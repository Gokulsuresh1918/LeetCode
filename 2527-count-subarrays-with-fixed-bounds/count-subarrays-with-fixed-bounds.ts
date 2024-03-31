function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let count = 0;
    let minPos = -1;
    let maxPos = -1;
    let left = 0;
    for(let right = 0; right < nums.length; right++) {
        const end = nums[right];

        if(end < minK || end > maxK) {
            minPos = -1;
            maxPos = -1;
            left = right + 1;
        }

        if(end === minK) { minPos = right}
        if(end === maxK) { maxPos = right}

        if(minPos !== -1 && maxPos !== -1) {
            count += (Math.min(minPos, maxPos) + 1 - left);
        }
    }

    return count;
};
