function adressBook(input) {
    let assocArr={};
    for(let entry of input){
        entry=entry.split(":");
        assocArr[entry[0]]=entry[1]
    }
    let sorted=Object.entries(assocArr)
    sorted.sort((a,b)=>a[0].localeCompare(b[0]))
    for(let assocKey of sorted){

        console.log(`${assocKey[0]} -> ${assocKey[1]}`);
    }
}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])