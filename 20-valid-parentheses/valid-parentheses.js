/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack =[]
    let mapping={
        ')':'(',
        '}':'{',
        ']':'['
    }
    for (let c of s){
        if(Object.values(mapping).includes(c)){
            stack.push(c)
        }else if(mapping.hasOwnProperty(c)){
            if(!stack.length||mapping[c]!==stack.pop()){
            return false
            }
        }
    }
    return stack.length===0

};