
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === nums[middleIndex]) {
            return middleIndex
        }
        if (nums[middleIndex] < target) {
                        leftIndex = middleIndex + 1

        } else {
                        rightIndex = middleIndex - 1

        }
    }
    return -1
}
