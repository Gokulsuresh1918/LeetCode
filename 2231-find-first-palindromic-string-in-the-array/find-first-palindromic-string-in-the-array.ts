/**
 * @param {string[]} words
 * @return {string}
 */
const checking = (word: string): boolean => {
    let first = 0;
    let last = word.length - 1;
    while (first < last) {
        if (word.charAt(first) !== word.charAt(last)) {
            return false;
        }
        first += 1;
        last -= 1;
    }
    return true;
};

function firstPalindrome(words: string[]): string {
    for (let i = 0; i < words.length; i++) {
        if (checking(words[i])) {
            return words[i];
        }
    }
    return '';
}
