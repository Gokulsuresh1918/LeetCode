/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    let a = val
    return {
        toBe: (val1) => {
            if (val1 !== a) {
                throw new Error("Not Equal")
            } else {
                return true
            }
        },
        notToBe: (val2) => { 
            if(val2===a){
                throw new Error('Equal')
            }else{
                return true
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */