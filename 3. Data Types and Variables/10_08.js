function TriplesOfLatinLetters(num) {
    let start = 97;
    let end = 97 + num;

    for (let i = start; i < end; i++) {
        for (let b = start; b < end; b++) {
            for (let c = start; c < end; c++) {
                console.log(`${String.fromCharCode(i)}${String.fromCharCode(b)}${String.fromCharCode(c)}`);
            }
        }
    }
}
//TriplesOfLatinLetters(2);

function solve(num) {
    let n = Number(num);
    for (let i = 0; i < n; i++) {
        let L1 = String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            let L2 = String.fromCharCode(97 + j);
            for (let k = 0; k < n; k++) {
                let L3 = String.fromCharCode(97 + k);
                console.log(`${L1}${L2}${L3}`);
            }
        }
    }
}
solve(2)