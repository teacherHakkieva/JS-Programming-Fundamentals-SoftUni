function tickets(day, age) {
    let price = -1;
    if (age >= 0 && age <= 122) {
        switch (day) {
            case 'Weekday':
                if (age > 18 && age <= 64) {
                    price = 18;
                } else {
                    price = 12
                }
                break;
            case 'Weekend':
                if (age > 18 && age <= 64) {
                    price = 20;
                } else {
                    price = 15;
                }
                break;
            case 'Holiday':
                if (age > 18 && age <= 64) {
                    price = 12;
                } else if (age <= 18) {
                    price = 5;
                } else {
                    price = 10;
                }
                break;
            default:
                console.log('Error!');
                break;

        }        if (price !== -1) {
            console.log(`${price}$`);
        }
    } else {
        console.log('Error!');
    }
}
tickets('Weekday', 42);
tickets('Holiday', -12);
tickets('Snow Day', 15);