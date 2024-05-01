function reversePrefix(word: string, ch: string): string {
    let index = word.indexOf(ch)
    if (index !== -1) {
        let prefix = word.substring(0, index + 1)
        let reversedprefix = prefix.split('').reverse().join('')
        return reversedprefix + word.substring(index + 1)
    } else {
        return word
    }
};

