/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let ans = {}
    for (let a of strs) {
        let key = a.split('').sort().join('')
        if (!ans[key]) {
            ans[key] = []
        }
        ans[key].push(a)
    }
    return Object.values(ans)
};