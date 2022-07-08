function spicy(yield) {
    let dayCounter = 0;
    let workerEat = 0
    let sum = 0;
    for (let i = yield; i >=100; i++) {
       dayCounter++;
       if (yield>0){
           yield-=10;
       }else{
           break;
       }
        workerEat = (yield+10)-26;
        sum+=workerEat;
        if (yield<100) {
            sum-=26;
            break;
        }
    }
    console.log(`${dayCounter}`);
    console.log(`${sum}`);
}
spicy(111)