function employees(date) {
    for (const str of date) {
        let obj = {
            name: str,
            id: str.length
        }
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.id}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)