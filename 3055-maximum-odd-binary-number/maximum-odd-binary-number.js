/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
     
    s = s.split('').sort((a,b)=>b-a)
    s.shift()
    console.log(s)
    s.push(1)
    
   return s.join('')
};