function minOperations(nums: number[], k: number): number {
        let value = k
    for (let item of nums){
        value ^= item
    }

    let answer = 0
    while (value > 0){
        value&=(value-1)
        answer++
    }
        
    return answer
};