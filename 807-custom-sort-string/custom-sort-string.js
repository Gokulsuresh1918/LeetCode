/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let result = '';
    let mp = new Map();
    for (let char of s) {
        mp.set(char, (mp.get(char) || 0) + 1);
    }
    for (let char of order) {
        if (mp.has(char)) {
            result += char.repeat(mp.get(char));
            mp.delete(char);
        }
    }
    for (let [char, count] of mp.entries()) {
        result += char.repeat(count);
    }
    return result;
};