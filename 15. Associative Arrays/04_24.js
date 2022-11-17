
function storage1(input) {
    let storage = new Map();
    for (let entry of input) {
        entry = entry.split(' ');
        let name = entry[0];
        let quantity = +entry[1];
        if (storage.has(name)) {
            let newQuuantity = storage.get(name) + quantity;
            storage.set(name, newQuuantity)
        } else {
            storage.set(name, quantity)
        }
    }
    let sorted=Array.from(storage.entries()).sort((a,b)=>a[0].localeCompare(b[0]))

    for (let storageEntry of sorted) {
        console.log(`${storageEntry[0]} -> ${storageEntry[1]}`);
    }
}
storage1(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);