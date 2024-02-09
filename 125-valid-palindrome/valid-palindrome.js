/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.trim() === '') {
        return true
    }
    let a = ''
    const lowString = s.toLowerCase()
    for (let i = 0; i <= lowString.length - 1; i++) {
        if (
            (lowString[i] >= "a" && lowString[i] <= "z") ||
            (lowString[i] >= "0" && lowString[i] <= "9")
        ) {
            a += lowString[i];
        }
    }
    let left=0
    let right=a.length-1
    while(left<right){
        if(a.charCodeAt(left)===a.charCodeAt(right)){
            left++
            right--
        }else{
            return false
        }
    }
    return true
};