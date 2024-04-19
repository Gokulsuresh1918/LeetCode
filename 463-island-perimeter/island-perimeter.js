/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let islands = 0;
    let neighbors = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                islands++;
                if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                    neighbors++;
                }
                if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                    neighbors++;
                }
            }
        }
    }

    return islands * 4 - neighbors * 2;
};