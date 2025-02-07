/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sortedEntries.slice(0, k).map(entry => entry[0]);
};