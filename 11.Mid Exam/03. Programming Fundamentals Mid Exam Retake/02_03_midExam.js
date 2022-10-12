function shootForTheWin(input) {
  let target = input[0].split(" ").map((x) => Number(x));
  let endLast = input.pop();
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    let index = Number(input[i]);
    let target1 = target[index];
    if (index >= 0 && index < target.length) {
      target[index] = -1;
      count++;
      for (const element of target) {
        if (element !== -1) {
          if (element > target1) {
            let element1 = element - target1;
            target.splice(target.indexOf(element), 1, element1);
          } else if (element <= target1) {
            let element2 = element + target1;
            target.splice(target.indexOf(element), 1, element2);
          }
        }
      }
    }
  }
  console.log(`Shot targets: ${count} -> ${target.join(" ")}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
