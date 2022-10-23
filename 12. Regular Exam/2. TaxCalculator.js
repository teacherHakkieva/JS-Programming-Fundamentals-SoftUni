function solve2(input) {
    let arr = input.join('').split(">>");
    let total = 0;

    for (let i = 0; i < arr.length; i++) {

        let totalPay = 0
        let commands = arr[i].split(' ');
        let types = commands[0];
        let years = +commands[1];
        let km = +commands[2];

        if (types == 'family') {
            totalPay = (parseInt(km / 3000) * 12 + (50 - (years * 5)));
           
        } else if (types == 'heavyDuty') {
            totalPay = (parseInt(km / 9000) * 14 + (80 - years * 8));
            
        } else if (types == 'sports') {
            totalPay = (parseInt(km / 2000) * 18 + (100 - years * 9));
           
        } else {
            console.log(`Invalid car type.`);
            continue;
        }
        console.log(`A ${types} car will pay ${totalPay.toFixed(2)} euros in taxes.`);
        total += totalPay;
    }
   console.log(`The National Revenue Agency will collect ${total.toFixed(2)} euros in taxes.`);
}
solve2(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
solve2();
solve2();