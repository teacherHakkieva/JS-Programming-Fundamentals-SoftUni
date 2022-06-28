function sumDigits(num) {
    num = num.toString();
    let num1 = num.split('');
    let sum = 0;
    for (let i = 0; i < num1.length; i++) {
        sum += Number(num1[i]);
    }
    console.log(sum);
}

sumDigits(97561)
