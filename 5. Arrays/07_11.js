function equalArrays(arr1, arr2) {
    let sum = 0;
    let areEqual = true;
    for (let i = 0; i < arr1.lemgth; i++) {
        arr1[i] = Number(arr1[i]);
    }

    for (let i = 0; i < arr2.lemgth; i++) {
        arr2[i] = Number(arr2[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            sum += Number(arr1[i])
        }
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30'])
