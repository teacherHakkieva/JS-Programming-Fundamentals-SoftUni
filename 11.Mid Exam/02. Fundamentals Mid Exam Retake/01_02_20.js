function softUniReception(input) {
    let arrWorker=input.map((x)=>Number(x));
    let firstWorker=arrWorker[0];
    let secondWorker=arrWorker[1];
    let thirtworker=arrWorker[2];
    let allStudent=arrWorker[3];
    let countHour=0;
    
    let oneHourWork=firstWorker+ secondWorker +thirtworker;
    while (allStudent>0) {
        allStudent-=oneHourWork;
        countHour++;
        if(countHour%4==0){
            countHour++;
        }
    }
    console.log(`Time needed: ${countHour}h.`);
}
//softUniReception(['5','6','4','20']);
//softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40'])