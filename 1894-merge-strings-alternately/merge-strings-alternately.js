/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let arr = []
    let i = 0
    let j = 0
    let total = word1.length + word2.length - 1
    // console.log(total)
    while (total > 0) {
        if (i < word1.length) {
            arr.push(word1[i])
            i++
        }
        if (j < word2.length) {
            arr.push(word2[j])
            j++
        }
        total--
    }
    return arr.join('')
};