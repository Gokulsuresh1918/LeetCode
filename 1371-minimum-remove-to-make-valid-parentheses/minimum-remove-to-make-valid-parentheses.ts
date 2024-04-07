function minRemoveToMakeValid(s: string): string {
    const stack = []
    const splited_string = s.split('')
    for (let i = 0; i <= s.length; i++) {
        let a = s[i]
        if (a === '(') {
            stack.push(i)
        } else if (a === ')') {
            if (stack.length === 0) {
                splited_string[i] = ""
            } else {
                stack.pop()

            }
        }
    }

    for(let i=0;i<=stack.length;i++){
        let b=stack[i]
        splited_string[b]=""
    }
    return splited_string.join('')
};