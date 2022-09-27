function arrayManipulator(numbers, commands) {
  for (let command of commands) {
    let tokens = command.split(" ");
    let currentCommand = tokens[0];
    let index = Number(tokens[1]);
    let element = +tokens[2];
    switch (currentCommand) {
      case "add":
        numbers.splice(index, 0, element);
        break;
      case "addMany":
        tokens.splice(0, 2);
        element = tokens.map((x) => Number(x));
        for (let i = 0; i < element.length; i++) {
          numbers.splice(index + i, 0, element[i]);
        }
        break;
      case "contains":
        console.log(numbers.indexOf(index));
        break;
      case "remove":
        numbers.splice(index, 1);
        break;
      case "shift":
        for (let i = 0; i < index; i++) {
          let first = numbers.shift();
          numbers.push(first);
        }
        break;
      case "sumPairs":
        let rezult = [];
        if (numbers.length % 2 !== 0) {
          numbers.push(0);
        }
        let copyNumbers = numbers.slice(0);
        for (let j = 0; j < numbers.length / 2; j++) {
          let sum = copyNumbers[0] + copyNumbers[1];
          rezult.push(sum);
          copyNumbers.shift(copyNumbers[0]);
          copyNumbers.shift(copyNumbers[1]);
          sum = 0;
        }
        numbers = rezult;
        break;
      case "print":
        console.log(`[ ${numbers.join(", ")} ]`);
        break;
      default:
        break;
    }
  }
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  [
    "addMany 5 9 8 7 6 5",
    "contains 15",
    "remove 3",
    "shift 1",
    "sumPairs",
    "print",
  ]
);
