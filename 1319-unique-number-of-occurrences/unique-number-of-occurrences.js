/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const freq = new Map()
    for (let x of arr) {
        freq.set(x, (freq.get(x) || 0) + 1)
    }
    const a = new Set(freq.values())
    return freq.size === a.size
};