function treasureHunt(input) {
  let treasure = input[0].split("|");
  let end = input.pop();
  for (let i = 1; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    let index = +commands[1];

    if (command == "Loot") {
      for (let j = 1; j < commands.length; j++) {
        let isTreasure = treasure.includes(commands[j]);
        if (isTreasure === false) {
          treasure.unshift(commands[j]);
        }
      }
    } else if (command == "Drop") {
      if (input.length > index && index >= 0) {
        let last = treasure[index];
        treasure.splice(index, 1);
        treasure.push(last);
      }
    } else if (command == "Steal") {
      if (index > treasure.length) {
        console.log(treasure.join(", "));
        treasure = [];
      } else {
        let arr1 = treasure.slice(-index);
        console.log(arr1.join(", "));
        treasure.splice(treasure.length - index, index);
      }
    }
  }
  if (treasure.length === 0) {
    console.log(`Failed treasure hunt.`);
    return;
  }
  let sum = 0;
  for (let k = 0; k < treasure.length; k++) {
    sum += treasure[k].length;
  }
  let average = sum / treasure.length;
  console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
