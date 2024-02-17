/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let word of words){
    let reverse= word.split('').reverse().join('')
    if(word === reverse){
        return word
    }
    }
    return ''
};