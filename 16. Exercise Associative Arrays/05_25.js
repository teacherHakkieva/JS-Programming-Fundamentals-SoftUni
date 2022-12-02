function solve(input) {
  let power={
    '1': 10,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
  };
  let type = {
    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1,
  };
  let person = {};
  for (let iterator of input) {
    let element = iterator.split(": ");
    let name = element[0];
    let carts = element[1].split(", ");
    if (!person.hasOwnProperty(name)) {
      person[name] = new Set();
    }
    for (let cart of carts) {
      person[name].add(cart);
    }
  }
  for (const [name, carts] of Object.entries(person)) {
    let powerS = 0;
    for (let cart of carts) {
      console.log[cart.split('')];
      let powerPower = power[cart[0]];
      let typePower = type[cart.slice(-1)];
      powerS += powerPower * typePower;
    }
    console.log(`${name}: ${powerS}`);
  }
}

solve([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

solve([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
