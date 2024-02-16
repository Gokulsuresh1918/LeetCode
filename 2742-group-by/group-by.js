/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    //reducing array into a single object
    return this.reduce((grouped, item) => {
        //apply callback function to get key 
        const key = fn(item);
        //if the key doesnit exist in the grouped object, create a new array 
        if (!grouped[key]) {
            grouped[key] = []
        }
        //push the current item to the array associated with the key 
        grouped[key].push(item);
        //Return the updated object for the next iteration 
        return grouped;
    },{})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */