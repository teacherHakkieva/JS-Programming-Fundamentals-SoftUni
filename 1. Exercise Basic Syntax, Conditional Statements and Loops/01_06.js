//baby, child, teenager, adult, elder
function ages(age) {
    if (age < 3 && age >= 0) {
        console.log('baby');
    } else if (age < 14 && age >= 3) {
        console.log('child');
    } else if (age < 20 && age >= 14) {
        console.log('teenager');
    } else if (age < 66 && age >= 20) {
        console.log('adult');
    } else if (age >= 66) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
}



ages('20');
ages(1);
ages(100);
ages(-1);
ages(56);