/**
 * @param {number[]} nums
 * @return {number[]}
 */
// This function sorts an array of numbers using Quick Sort algorithm.
function sortArray(nums){
    // Helper function to perform the quickSort algorithm.
    function quickSort(left, right) {
        // If the current segment is empty or has one element, no sorting is needed.
        if (left >= right) {
            return;
        }

        let i = left - 1;
        let j = right + 1;

        // Choose the pivot element from the middle of the segment.
        const pivot = nums[(left + right) >> 1];

        // Partition process: elements < pivot go to the left, elements > pivot go to the right.
        while (i < j) {
            // Find left element greater than or equal to the pivot.
            while (nums[++i] < pivot);
            // Find right element less than or equal to the pivot.
            while (nums[--j] > pivot);

            // If pointers have not crossed, swap the elements.
            if (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        // Recursively apply the same logic to the left partition.
        quickSort(left, j);
        // Recursively apply the same logic to the right partition.
        quickSort(j + 1, right);
    }

    // Obtain the length of the array to sort.
    const n = nums.length;
    // Call the quickSort helper function on the entire array.
    quickSort(0, n - 1);

    // Return the sorted array.
    return nums;
}