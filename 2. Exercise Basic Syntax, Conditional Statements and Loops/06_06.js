function printSum(startNum, endNum) {
    let sum =0
    let result='';

    for (let i = startNum; i <= endNum; i++) {
        result+=(`${i} `);
        sum+=i;  
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
printSum(5,10)