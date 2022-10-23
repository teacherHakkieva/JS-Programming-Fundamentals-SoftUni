function solve1(input) {
    let experience = input.shift();
    let countBattles = input[0];
    let count = 0
    for (let i = 1; i <= countBattles; i++) {
        experience -= input[i];
        count++;
        
        if (i % 3 === 0) {
            experience -= (input[i] * 0.15)
        }
        if (i % 5 === 0) {
            experience += (input[i] * 0.10)
        }
        if (i % 15 === 0) {
            experience -= (input[i] * 0.05)
        }
        if (experience <= 0) {
            console.log(`Player successfully collected his needed experience for ${count} battles.`);
            return;
        }
    }
    console.log(`Player was not able to collect the needed experience, ${experience.toFixed(2)} more needed.`);
}
solve1([500,
    5,
    50,
    100,
    200,
    100,
    30]);
solve1([500,
    5,
    50,
    100,
    200,
    100,
    20])
    ;
solve1([400,
    5,
    50,
    100,
    200,
    100,
    20]);
    