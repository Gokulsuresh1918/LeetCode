/**
 * @return {Function}
 */
var createHelloWorld = function() {
    const a='Hello World'
    return function(){
        return a
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */