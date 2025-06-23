function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const word of strs){
        const sorted = word.split('').sort().join('')
        if(!map.has(sorted)){
            map.set(sorted,[])
        }
        map.get(sorted).push(word)
    }
    return Array.from(map.values())
};


