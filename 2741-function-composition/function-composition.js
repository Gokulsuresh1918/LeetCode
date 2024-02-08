/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    if (functions.length === 0) {
        return function (x) { return x }
    }
    return function (x) {
        let a = x
        for (let i = functions.length - 1; i >= 0; i--) {
            a = functions[i](a)
        }
        return a
    }

};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */