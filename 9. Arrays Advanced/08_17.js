function arrayManipulations(input) {
  let index = 0;
  let arr = input[index].split(" ").map((x) => Number(x));
  index++;

  for (let i = index; i < input.length; i++) {
    let commant = input[i].split(" ");

    let comm = commant[0];
    let num = Number(commant[1]);
    let num2 = Number(commant[2]);
    switch (comm) {
      case "Add":
          arr.push(num);
        break;
      case "Remove":
          arr=arr.filter(el=>el !==num);
        break;
      case "RemoveAt":
          arr.splice(num,1)
        break;
      case "Insert":
          arr.splice(num2,0,num)
        break;
      default:
        break;
    }
  }
  console.log(arr.join(' '));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
