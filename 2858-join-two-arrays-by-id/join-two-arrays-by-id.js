/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
   let merged = {}
   let array= [...arr1, ...arr2]
    array.forEach(obj => {
        if (!merged[obj.id]) {
            merged[obj.id] = obj
        } else {
            Object.assign(merged[obj.id], obj)
        }
    })
let joinedarray=Object.values(merged)
 joinedarray.sort((a,b)=>a.id-b.id)
 return joinedarray
};




  