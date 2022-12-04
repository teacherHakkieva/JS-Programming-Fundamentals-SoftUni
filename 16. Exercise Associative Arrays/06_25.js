function companyUser(input) {
    let person=new Map();
    for (let element of input) {
        let [name,user]=element.split(' -> ');
        if(!person.has(name)){
       person.set(name,new Set());
        }
       person.get(name).add(user)    
        
    }
    let sorted=Array.from(person.entries()).sort()
    for (const key of sorted) {
        console.log(key[0]);
        for (const el of key[1]) {
            console.log('--',el);
        }
    }
}
companyUser([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])