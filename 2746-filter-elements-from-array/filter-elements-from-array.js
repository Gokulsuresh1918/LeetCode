/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filterArr=[]
    for(let i=0;i<arr.length;i++){
        const condition = fn(arr[i],i)
      if( condition){
          filterArr.push(arr[i])
      }
    }
    return filterArr
};
