function solve2(input) {
    let people = +input[0];
    let wagon = input[1].split(' ').map(Number);

    for (let i = 0; i < wagon.length; i++) {
        if (people > 0) {
            if (wagon[i] < 4) {
                let wag = wagon[i];
                wagon[i] = wagon[i] - 4;
                people += wagon[i];
                if (people < 0) {
                    wagon[i] = wag - wagon[i] + people;
                    people = 0
                } else {
                    wagon[i] = 4;
                }
            }
        }
    }
    let isWagonFull = hasEmptySpace = wagon.filter((w) => w !== 4).length > 0
    if (isWagonFull == false && people !== 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagon.join(' '));
    } else if (isWagonFull == false && people === 0) {
        console.log(wagon.join(' '));
    } else {
        console.log(`The lift has empty spots!`);
        console.log(wagon.join(' '));
    }
}
solve2([
    "15",
    "0 0 0 0 0"
]
);
solve2([
    "20",
    "0 2 0"
]
)
