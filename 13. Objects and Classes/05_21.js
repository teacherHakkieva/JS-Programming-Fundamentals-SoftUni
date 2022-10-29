function cats(input) {
    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.sing = 'Meow';
        }
    }
    let newCatArr = [];
    for (let i = 0; i < input.length; i++) {
        let item = input[i];
        let [name, age] = item.split(' ')
        let cat = new Cats(name, age)
        newCatArr.push(cat);
    }
    for (const el of newCatArr) {
        console.log(`${el.name}, age ${el.age} says ${el.sing}`);
    }
}
cats(['Mellow 2', 'Tom 5'])