function minerTank(input) {
    let obj={}
    for (let i = 0; i < input.length; i+=2) {
        let resource=input[i];
        let quantity=+input[i+1]
        if (!obj.hasOwnProperty(resource)) {
            obj[resource]=0
        }
        obj[resource]+=quantity
    }
    let result = Object.entries(obj)
    for (let [key,value] of result) {
        console.log(`${key} -> ${value}`);
    }
}
minerTank([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])