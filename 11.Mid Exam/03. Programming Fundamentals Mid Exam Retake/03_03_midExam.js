function movingTarget(input) {
  let target = input[0].split(" ").map((x) => Number(x));
  let lastEl = input.pop();
  for (let i = 1; i < input.length; i++) {
    let commants = input[i].split(" ");
    let commant = commants[0];
    let index = Number(commants[1]);
    let value = Number(commants[2]);
    switch (commant) {
      case "Shoot":
        if (index >= 0 && index < target.length) {
          let valueTarget = target[index] - value;
          if (valueTarget <= 0) {
            target.splice(index, 1);
          } else {
            target[index] = valueTarget;
          }
        }
        break;
      case "Strike":
        if (index >= 0 && index - value >= 0 && index + value < target.length) {
          let min = index - value;
          let max = value + value + 1;
          target.splice(min, max);
        } else {
          console.log("Strike missed!");
        }
        break;
      case "Add":
        if (index >= 0 && index < target.length) {
          target.splice(index, 0, value);
        } else {
          console.log("Invalid placement!");
        }
        break;
    }
  }
  console.log(target.join("|"));
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Add 22 3",
  "Strike 2 1",
  "End",
]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
