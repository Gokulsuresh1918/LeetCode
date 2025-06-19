function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = new Array(n).fill(0);
    let product = 1;
    let zeros = 0;

    for (const num of nums) {
        if (num === 0) {
            zeros++;
            continue;
        }
        product *= num;
    }

    if (zeros === 1) {
        for (let i = 0; i < n; i++) {
            ans[i] = nums[i] === 0 ? product : 0;
        }
    } else if (zeros === 0) {
        for (let i = 0; i < n; i++) {
            ans[i] = Math.floor(product / nums[i]);
        }
    }

    return ans;
}