function memoryGame(arr) {
  let gameArr = arr[0].split(" ");
  let copyGameArr = [];
  let end = arr.pop();
  let counter = 0;
  for (let i = 1; i < arr.length; i++) {
    if (gameArr.length === 0) {
      console.log(`You have won in ${counter} turns!`);
      return;
    }
    let command = arr[i].split(" ").map((x) => Number(x));
    let first = command[0];
    let second = command[1];
    let a = gameArr[first];
    let b = gameArr[second];
    if (
      first < 0 ||
      second < 0 ||
      first===second||
      first > gameArr.length - 1 ||
      second > gameArr.length - 1
    ) {
      console.log("Invalid input! Adding additional elements to the board");
      counter++;
      let add = `-${counter}a`;
      gameArr.splice(gameArr.length / 2, 0, add, add);
    } else if (a === b) {
      console.log(
        `Congrats! You have found matching elements - ${gameArr[first]}!`
      );
      counter++;
      copyGameArr = gameArr.filter(function (element) {
        return element != a;
      });
      gameArr = copyGameArr;
      copyGameArr = [];
    } else if (a !== b) {
      console.log("Try again!");
      counter++;
    }
  }
  if (gameArr.length > 0) {
    console.log("Sorry you lose :(");
    console.log(gameArr.join(" "));
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
console.log("-------------");
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
console.log("-------------");
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
