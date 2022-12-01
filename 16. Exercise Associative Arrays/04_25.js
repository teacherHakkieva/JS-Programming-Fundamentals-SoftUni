function partyTime(input) {
  let vip = new Map();
  let regualer = new Map();
  while (input[0] !== "PARTY") {
    for (let el of input) {
      element = input.shift(el);
      if (Number(element[0])) {
        vip.set(element);
      } else {
        regualer.set(element);
      }
    }
  }
  let party = input.shift(input[0]);
  for (let guest of input) {
    vip.delete(guest);
    regualer.delete(guest);
  }
  console.log(vip.size + regualer.size);
  for (let key of vip) {
    console.log(key[0]);
  }
  for (let key of regualer) {
    console.log(key[0]);
  }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
