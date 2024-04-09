function timeRequiredToBuy(tickets: number[], k: number): number {
    let countTime = 0;

    while (tickets[k] !== 0) {

        for (let i = 0; i < tickets.length; i++) {

            if (tickets[k] == 0) {
                return countTime;
            }
            if (tickets[i] !== 0) {
                tickets[i] = tickets[i] - 1;
                countTime++;
            }
        }

    }

    return countTime;
};