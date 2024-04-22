function openLock(deadends: string[], target: string): number {
      const dead = new Set(deadends)
  let turns = 0
  let queue = ['0000']
  const seen = new Set(['0000'])
  while(queue.length){
    const next = []
    for(let comb of queue){
      if(comb === target) return turns
      if(dead.has(comb)) continue
      for(let c of getCombinations(comb)){
        if(seen.has(c)) continue
        seen.add(c)
        next.push(c)
      }      
    }
    turns++
    queue = next
  }  
  return -1
};
function getCombinations(comb, ans=[]){
  for(let i=0;i<comb.length;i++){
    ans.push(comb.slice(0,i) + ((+comb[i]+1)%10) + comb.slice(i+1))
    ans.push(comb.slice(0,i) + ((+comb[i]+9)%10) + comb.slice(i+1))
  }
  return ans
}