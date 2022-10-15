function shopingList(input) {
  let list = input[0].split("!");
  input.pop();
  let isItem = false;
  for (let i = 1; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    let comm1 = commands[1];
    let comm2 = commands[2];
    isItem = list.includes(comm1);
    switch (command) {
      case "Urgent":
        if (isItem == false) {
          list.unshift(comm1);
        }
        break;
      case "Unnecessary":
        if (isItem == true) {
          index = list.indexOf(comm1);
          list.splice(index, 1);
        }
        break;
      case "Correct":
        if (isItem == true) {
          index = list.indexOf(comm1);
          list.splice(index, 1, comm2);
        }
        break;
      case "Rearrange":
        if (isItem == true) {
          index = list.indexOf(comm1);
          list.splice(index, 1);
          list.push(comm1);
        }
        break;
    }
  }
  console.log(list.join(', '));
}
shopingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
shopingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
