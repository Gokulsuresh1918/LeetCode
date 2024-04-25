function longestIdealString(s: string, k: number): number {
      // Initialize an array to keep track of the longest ideal subsequence for each ASCII character
    const l = new Array(128).fill(0);

    // Initialize a variable to store the maximum length of ideal subsequences
    let maxLength = 0;

    // Iterate over each character in the input string
    for (const c of s) {
        // Get the ASCII value of the character
        const i = c.charCodeAt(0);

        // Initialize the maximum length for the current character
        let maxCurrLength = 0;

        // Iterate over the range [i - k, i + k] to find the maximum length
        for (let j = Math.max(0, i - k); j <= Math.min(127, i + k); j++) {
            maxCurrLength = Math.max(maxCurrLength, l[j]);
        }

        // Update the length for the current character
        l[i] = maxCurrLength + 1;

        // Update the overall maximum length
        maxLength = Math.max(maxLength, l[i]);
    }

    // Return the maximum length of ideal subsequences
    return maxLength;
};