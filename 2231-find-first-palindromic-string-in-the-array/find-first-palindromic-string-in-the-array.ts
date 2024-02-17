function firstPalindrome(words: string[]): string {
    for(let word of words) {
        if(isPalindrome(word)) {
            return word
        }
    }
    return ""



    function isPalindrome(str: string): boolean {
        let start = 0
        let end = str.length - 1
        while(start < end) {
            if(str[start] != str[end]) return false
            start++
            end--
        }
        return true
    }
};