/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let fir = m - 1
    let sec = n - 1
    let tot = m + n - 1
    while (fir >= 0 && sec >= 0) {
        if (nums1[fir] > nums2[sec]) {
            nums1[tot] = nums1[fir]
            fir--
        } else {
            nums1[tot] = nums2[sec]
            sec--
        }
        tot--
    }
  while (sec >= 0) {
        nums1[tot] = nums2[sec]
       sec--
       tot--
    }
};