/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    function dfs(x,y){
        if(x>grid.length-1||y>grid[0].length-1||x<0||y<0||grid[x][y]!='1'){
            return 
        }
        grid[x][y]='0'
        dfs(x+1,y)
        dfs(x-1,y)
        dfs(x,y+1)
        dfs(x,y-1)

    }
    let count=0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]=='1'){
                count++
                dfs(i,j)
            }
        }
    }
    return count
};