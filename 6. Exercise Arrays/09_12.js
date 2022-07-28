function dungeonestDark(input) {
  let rooms = input[0].split("|");
  let health = 100;
  let coins = 0;
  let isFinished = true;

  for (let index = 0; index < rooms.length; index++) {
    let room = rooms[index].split(" ");

    if (room[0] === "potion") {
      let curHealth = room[1];
      if (health <= 100) {
        if (health + Number(curHealth) >= 100) {
          curHealth = 100 - health;
          health = 100;
        } else {
          health += Number(curHealth);
        }
      }
      console.log(`You healed for ${curHealth} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (room[0] === "chest") {
      let currCoins = room[1];
      console.log(`You found ${currCoins} coins.`);
      coins += Number(currCoins);
    } else {
      let currMonstar = room[0];
      let attackOfMonster = Number(room[1]);
      health -= attackOfMonster;
      if (health > 0) {
        console.log(`You slayed ${currMonstar}.`);
      } else {
        console.log(`You died! Killed by ${currMonstar}.`);
        console.log(`Best room: ${index + 1}`);
        isFinished = false;
        break;
      }
    }
  }

  if (isFinished) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
