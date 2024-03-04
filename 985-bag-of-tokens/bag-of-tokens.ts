function bagOfTokensScore(tokens: number[], power: number): number {
    tokens.sort((a,b) => a - b);

    let score = 0;
    let i = 0, j = tokens.length - 1;


    while(i <= j){
        if(tokens[i] <= power){
            score++
            power -= tokens[i];
            i++
        }

        // Add the power, pay with score. But if i === j 
        // (Last iteration) dont pay.
        else if(score > 0 && i !== j){
            power += tokens[j];
            score--
            j--
        }
        else break;
    }

    return score

};