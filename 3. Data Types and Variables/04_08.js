function integerAndFloat(first, second, third) {
    let sum = first + second + third;
    sum % 1 === 0 ? sum += ' - Integer' : sum += " - Float";
    console.log(sum);
}
integerAndFloat(9, 100, 1.1);

function float(a, b, c) {
    let sum = a + b + c;

    let sumAsString = String(sum);
    let type = 'Integer'
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            type = 'Float'
        }
                  }
                  console.log(`${sum} - ${type}`);
}
float(9, 100, 1.1);