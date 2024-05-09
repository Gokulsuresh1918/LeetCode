/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let length = score.length
    let answer = new Array(length)
    const scorewithindex = score.map((score, index) => [score, index])
    scorewithindex.sort((a, b) => b[0] - a[0])
    const rank = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
    for (i = 0; i < length; i++) {
        const index = scorewithindex[i][1]
        if (i < 3) {
            answer[index] = rank[i]
        } else {
            answer[index] = String(i + 1)
        }
    }
    return answer
};