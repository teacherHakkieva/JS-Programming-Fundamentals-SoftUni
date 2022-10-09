function theLiftProblem(input) {
  let people = +input[0];
  let currentState = input[1];
  currentState = currentState.split(" ").map((x) => Number(x));
  let hasEmptySpase=false;
  for (let i = 0; i < currentState.length; i++) {
     hasEmptySpase = currentState.filter((w) => w !== 4).length > 0;
    if (hasEmptySpase) {
      let num = 4 - currentState[i];
      people -= num;
      if (people < 0) {
        num += people;
      }
      let pushNum = num + currentState[i];
      currentState.splice(currentState.indexOf(currentState[i]), 1, pushNum);
      if (people < 0) {
        people = 0;
      }
    }
  }
  if (people !== 0 && hasEmptySpase) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(`${currentState.join(" ")}`);
  } else
   if (people === 0 && hasEmptySpase) {
    console.log(`The lift has empty spots!`);
    console.log(`${currentState.join(" ")}`);
  } else{
    console.log(`${currentState.join(" ")}`);
  } 
}
theLiftProblem(["15", "0 0 0 0 0"]);
theLiftProblem(["20", "0 2 0"]);
theLiftProblem(["2", "4 2 4"]);
