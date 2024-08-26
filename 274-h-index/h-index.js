/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length;

    citations.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if(citations[i] >= n - i) return n - i;
    }

    return 0;
};