function twoSum(nums: number[], target: number): number[] {

    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (map.has(diff)) {
            return [map.get(diff)!, i]
        }
        map.set(nums[i],i)
    }
};

