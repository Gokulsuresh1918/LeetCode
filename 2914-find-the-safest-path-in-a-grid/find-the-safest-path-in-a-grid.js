/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const n = grid.length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const isInBound = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

    // Initialize distances and queue
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    const queue = [];
    
    // Add all 1s to the queue and set their distance to 0
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    // BFS to calculate minimum distance from each cell to nearest 1
    for (let i = 0; i < queue.length; i++) {
        const [r, c] = queue[i];
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (isInBound(nr, nc) && dist[nr][nc] === Infinity) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    // Initialize maxDistance and queue for the second BFS
    const maxDistance = Array.from({ length: n }, () => Array(n).fill(0));
    queue.length = 0;
    maxDistance[0][0] = dist[0][0];
    queue.push([0, 0]);

    // BFS to calculate maximum safeness factor for each cell
    for (let i = 0; i < queue.length; i++) {
        const [r, c] = queue[i];
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (isInBound(nr, nc)) {
                const newDistance = Math.min(maxDistance[r][c], dist[nr][nc]);
                if (newDistance > maxDistance[nr][nc]) {
                    maxDistance[nr][nc] = newDistance;
                    queue.push([nr, nc]);
                }
            }
        }
    }

    return maxDistance[n - 1][n - 1];   
};