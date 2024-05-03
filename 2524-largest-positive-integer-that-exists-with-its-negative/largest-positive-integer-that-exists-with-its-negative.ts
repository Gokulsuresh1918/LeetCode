function findMaxK(nums: number[]): number {
    let res=-1
    let numSet=new Set(nums)
    console.log(numSet)
    for (let num of numSet){
        if(numSet.has(-num)){
            res=Math.max(res,num)
        }
    }
    return res
};