function numberOfPoints(nums: number[][]): number {
    const set = new Set()
    nums.forEach(([i,j])=>{
        while(i<=j){
            set.add(i)
            i++
        }
    })
    return set.size
};
