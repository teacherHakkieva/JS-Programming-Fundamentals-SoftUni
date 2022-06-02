function vacation(peopleCount, groupType, dayOfWeek) {
    let price = 0;
    let discount = 1;
    switch (groupType) {
        case 'Students':
            if (dayOfWeek == 'Friday') {
                price = peopleCount * 8.45;
            } else if (dayOfWeek == 'Saturday') {
                price = peopleCount * 9.80;
            } else if (dayOfWeek == 'Sunday') {
                price = peopleCount * 10.46;
            }
            if (peopleCount >= 30) {
                discount = 0.15;
                price = price - price * discount;
            }
            break;
        case 'Business':
            if (peopleCount >= 100) {
                peopleCount -= 10;
            }
            if (dayOfWeek == 'Friday') {
                price = peopleCount * 10.90;
            } else if (dayOfWeek == 'Saturday') {
                price = peopleCount * 15.60;
            } else if (dayOfWeek == 'Sunday') {
                price = peopleCount * 16;
            }
            break;
        case 'Regular':
            if (dayOfWeek == 'Friday') {
                price = peopleCount * 15;
            } else if (dayOfWeek == 'Saturday') {
                price = peopleCount * 20;
            } else if (dayOfWeek == 'Sunday') {
                price = peopleCount * 22.50;
            }
            if (peopleCount >= 10 && peopleCount <= 20) {
                discount = 0.5;
                price = price - price * discount;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", 'Sunday');
vacation(40, "Regular", "Saturday");