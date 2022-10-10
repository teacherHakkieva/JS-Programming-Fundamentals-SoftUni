function counterStrike(input) {
  let energy = input[0];
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] == "End of battle") {
      console.log(`Won battles: ${count}. Energy left: ${energy}`);
      return;
    } else {
      let num = Number(input[i]);
      if (num <= energy) {
        energy -= num;
        count++;
        if (count % 3 == 0) {
          energy += count;
        }
      } else {
        console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
        return
      }
    }
  }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);

counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
