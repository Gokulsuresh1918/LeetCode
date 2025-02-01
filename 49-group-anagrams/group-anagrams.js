/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let ans={}
    for(s of strs){
        let key=s.split('').sort().join('')
              if(!ans[key]){
                ans[key]=[]
              }
              ans[key].push(s)
    }
    return Object.values(ans)
};