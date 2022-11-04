function inventory(input) {
    let allhero = []
    for (let i = 0; i < input.length; i++) {
        let hero = input[i].split(' / ');
        let name = hero[0]
        let level = +hero[1]
        let item = hero[2];
        let obj = {
            Hero: name,
            level: level,
            items: item
        }
       allhero.push(obj)
    }
    allhero.sort((a,b)=>a.level-b.level)
    for (const el of allhero) {
        for (const key in el) {
            if (key==='Hero') {
                console.log(`${key}: ${el[key]}`);
            }else{
                console.log(`${key} => ${el[key]}`)
            }
        }
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)