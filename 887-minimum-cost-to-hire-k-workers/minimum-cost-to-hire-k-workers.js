/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */

class Worker {
    constructor(ratio, quality) {
        this.ratio = ratio;
        this.quality = quality;
    }
}

var mincostToHireWorkers = function (quality, wage, k) {
    const n = quality.length;
    let minCost = Number.MAX_VALUE;
    let qualityTillNow = 0;
    let workers = [];

    for (let i = 0; i < n; i++) {
        workers.push(new Worker(wage[i] / quality[i], quality[i]));
    }

    // Sorting workers by their wage-quality ratio
    workers.sort((a, b) => a.ratio - b.ratio);

    // Max-heap to store qualities, implemented using a min-heap and inverting the values
    let highQualityWorkers = [];

    for (let worker of workers) {
        let ratio = worker.ratio;
        let qua = worker.quality;

        qualityTillNow += qua;
        highQualityWorkers.push(-qua);  // Push negative to simulate max-heap
        highQualityWorkers.sort((a, b) => a - b);  // Sort to maintain heap properties

        if (highQualityWorkers.length > k) {
            qualityTillNow += highQualityWorkers.shift();  // Remove largest quality (which is negative)
        }

        if (highQualityWorkers.length === k) {
            minCost = Math.min(minCost, qualityTillNow * ratio);
        }
    }

    return minCost;
};