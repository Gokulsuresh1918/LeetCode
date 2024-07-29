/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === letter) {
            count++;
        }
    }
    if (count > 0) {
        let percentage = Math.floor((count / s.length) * 100);
        return percentage;
    }
    return 0;
};