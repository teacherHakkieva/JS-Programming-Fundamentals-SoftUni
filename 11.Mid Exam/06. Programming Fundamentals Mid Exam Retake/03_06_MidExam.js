function manOWar(input) {
  let pirateShip = input[0].split(">").map(Number);
  let warship = input[1].split(">").map(Number);
  let pirateHealth = +input[2];
  let warHealth = +input[2];
  let last = input.pop();
  for (let i = 3; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    let index = +commands[1];
    if (command == "Fire") {
      let damage = +commands[2];
      if (index >= 0 && index < warship.length) {
        warship[index] -= damage;
        if (warship[index] < 0) {
          warship[index] = 0;
        }
        if (warship[index] === 0) {
          console.log(`You won! The enemy ship has sunken.`);
          return;
        }
      }
    } else if (command === "Defend") {
      let endIndex = +commands[2];
      let damages = +commands[3];
      if (
        index >= 0 &&
        index <= pirateShip.length &&
        endIndex >= 0 &&
        endIndex <= pirateShip.length
      ) {
        for (let j = index; j <= endIndex; j++) {
          pirateShip[j] -= damages;
          if (pirateShip[j] <= 0) {
            pirateShip[j] = 0;
          }
          if (pirateShip[j] === 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            return;
          }
        }
      }
    } else if (command === "Repair") {
      damage = +commands[2];
      if (index >= 0 && index < pirateShip.length) {
        pirateShip[index] += damage;
        if (pirateShip[index] > pirateHealth) {
          pirateShip[index] = pirateHealth;
        }
      }
    } else if (command === "Status") {
      let low = pirateHealth / 5;
      let count = 0;
      for (const el of pirateShip) {
        if (el < low) {
          count++;
        }
      }
      console.log(`${count} sections need repair.`);
    }
  }
  let pirateShipSum = 0;
  for (const iterator of pirateShip) {
    pirateShipSum += iterator;
  }

  let warshipSum = 0;
  for (const iterator of warship) {
    warshipSum += iterator;
  }
  console.log(`Pirate ship status: ${pirateShipSum}`);
  console.log(`Warship status: ${warshipSum}`);
}
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
