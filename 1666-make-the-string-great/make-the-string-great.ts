function makeGood(s: string): string {
      const stack = [''];
    
    for(let c of s) {
        let top = stack[stack.length-1];
        if(top.toLowerCase() === c.toLowerCase() && top !== c) stack.pop()
        else stack.push(c);
    }
    return stack.join('');
};