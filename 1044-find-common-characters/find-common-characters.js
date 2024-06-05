/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
 const result=[]
 const firstWord=[...words[0]]
 for (const letter of firstWord){
    if(words.every((q)=>q.includes(letter))){
        result.push(letter)
       words= words.map((q)=>q.replace(letter,''))
    }
 }
 return result
};