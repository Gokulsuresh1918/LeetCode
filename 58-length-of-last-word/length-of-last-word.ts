function lengthOfLastWord(s: string): number {
    return s.trimEnd().split(' ').pop().length
};