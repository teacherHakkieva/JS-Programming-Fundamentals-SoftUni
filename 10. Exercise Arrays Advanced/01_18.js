function train(input) {
  let index = 0;
  let arrContainingWagon = input[index].split(" ").map((x) => Number(x));
  index++;
  let maxCapacityWagon = Number(input[index]);
  index++;
  for (let i = index; i < input.length; i++) {
    let command = input[index].split(",");

    for (let j = 0; j < command.length; j++) {
      let comm = command[j].split(" ");
      for (let w = 0; w < arrContainingWagon.length; w++) {
        if (comm[0] === "Add") {
          arrContainingWagon.push(Number(comm[1]));
          break;
        } else {
          let find = Number(comm[0]);
          let sumVag = arrContainingWagon[w] + find;
          if (sumVag <= maxCapacityWagon) {
            arrContainingWagon[w] += find;
            break;
          }
        }
      }
    }
    index++;
  }
  console.log(arrContainingWagon.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
