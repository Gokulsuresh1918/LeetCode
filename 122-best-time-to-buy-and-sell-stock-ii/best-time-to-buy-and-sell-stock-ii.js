/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let sum = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            sum += prices[i] - prices[i -1]
        }
    }
    return sum
    // let left=0
    // let right=1
    // let sum=0
    // while(right<prices.length){
    //     if(prices[right]>prices[left]){
    //         sum=sum+(prices[right]-prices[left])
    //         left=right+1
    //         right++
    //     }else{
    //         left=right
    //     }
    //     right++
    // }
    // return sum
};