function rounding(num, desimal) {
    if (desimal>15) {
        desimal=15;
    }
    console.log(`${parseFloat(num.toFixed(desimal))}`);
}
rounding(3.1415926535897932384626433832795,16);
rounding(10.5,3);