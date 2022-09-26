function searchForANumber(collection,numbers) {
   
    let modifiedArr=collection.slice(0,numbers[0]);
    modifiedArr.splice(0,numbers[1])
    let elementToFind = numbers[2];
    let counter=0;
    for (let i = 0; i < modifiedArr.length; i++) {
     if(elementToFind === modifiedArr[i]) {
         counter++;
     }   
    }
    console.log(`Number ${elementToFind} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
