/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2!==str2+str1){
        return ''
    }
    let m=str1.length
    let n=str2.length
    function gcd(x,y){
        if(!y){
            return x
        }
        return gcd(y,x%y)
    }
    let cut=gcd(m,n)
    return str1.slice(0,cut)
};