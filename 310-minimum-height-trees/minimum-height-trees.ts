function findMinHeightTrees(n: number, edges: number[][]): number[] {
        const counts = new Array(n).fill(0);
        const links = new Array(n).fill(0);
        
        for (const edge of edges) {
            links[edge[0]] ^= edge[1];
            counts[edge[0]]++;
            links[edge[1]] ^= edge[0];
            counts[edge[1]]++;
        }
        
        const Qu = [];
        const dists = new Array(n).fill(0);
        
        for (let i = 0; i < n; i++) {
            if (counts[i] === 1)
                Qu.push(i);
        }
        
        let stp = 1;
        while (Qu.length > 0) {
            const size = Qu.length;
            for (let j = 0; j < size; j++) {
                const tmp = Qu.shift();
                links[links[tmp]] ^= tmp;
                counts[links[tmp]]--;
                if (counts[links[tmp]] === 1) {
                    dists[links[tmp]] = Math.max(stp, dists[links[tmp]]);
                    Qu.push(links[tmp]);
                }
            }
            stp++;
        }
        
        const maxDist = Math.max(...dists);
        const res = [];
        for (let i = 0; i < n; i++) {
            if (dists[i] === maxDist)
                res.push(i);
        }
        
        return res;

};