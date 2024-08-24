/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let f = 0
    let s = 1
    let maxprofit = 0
    while (s < prices.length) {
        if (prices[f] < prices[s]) {
            let profit = prices[s] - prices[f]
             maxprofit = Math.max(maxprofit, profit)
        } else {
            f = s

        }

        s++
    }
    return maxprofit
};