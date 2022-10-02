function airPollution(map, commands) {
    let matrix = map.map(line => line.split(' ').map(Number));

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ')[0];
        let num = Number(commands[i].split(' ')[1]);

        matrix = matrix.map(arr => arr.map(e => e < 0 ? e = 0 : e));

        if (command == 'breeze') {
            matrix[num] = matrix[num].map(e => e - 15);

        } else if (command == 'gale') {
            matrix.forEach(arr => arr[num] -= 20);

        } else if (command == 'smog') {
            matrix = matrix.map(arr => arr.map(e => e + num));
        }
    }

    let res = [];

    for (let i = 0; i < matrix.length; i++) {
        let polluted = matrix[i].filter(e => e >= 50);
        polluted.forEach((e, index) => res.push(`[${i}-${matrix[i].indexOf(e, index)}]`));

    }


    if (res.length == 0) {
        return 'No polluted areas';
    }

    return 'Polluted areas: ' + res.join(', ');
}
airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
)