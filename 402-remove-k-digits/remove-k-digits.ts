var removeKdigits = function(num, k) {
    const stack = [];
    let removed = 0;
    for(let n of num) {
        while(stack.length && n < stack[stack.length-1] && removed < k) {
            stack.pop();
            removed += 1;
        }
        stack.push(n);
    }
    
    // remove all remaining large numbers
    while(removed < k) {
        stack.pop();
        removed += 1;
    }
    
    // remove all beginning zeroes
    while(stack.length && stack[0] === '0') {
        stack.shift();
    }
    
    return stack.length ? stack.join('') : '0';
};