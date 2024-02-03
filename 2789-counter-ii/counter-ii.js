/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let a = init||0
    return {
        increment() {
            a++
            return a
        },
        decrement() {
            a--
            return a
        },
        reset(){
            a=init
            return a
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */