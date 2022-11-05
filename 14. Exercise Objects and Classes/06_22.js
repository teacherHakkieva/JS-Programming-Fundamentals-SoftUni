function makeADictionary(input) {
    let dictionary = {};
    for (const iterator of input) {
        let obj = JSON.parse(iterator);
        dictionary = Object.assign(dictionary, obj)
    }
    let sortKey = Object.keys(dictionary)
    sortKey.sort((a, b) => a.localeCompare(b))

    for (const temp of sortKey) {
        let difinition = dictionary[temp];
        console.log(`Term: ${temp} => Definition: ${difinition}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])