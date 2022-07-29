function ladybugs(input) {
  let size = input[0];
  let arr = [];
  let arrBizi = input[1].split(" ");

  for (const element of arrBizi) {
    arr.push(element);
  }

  let index = 2;
  for (let i = index; i < input.length; i++) {
    let commant = input[i].split(" ");

    let indexArr = Number(commant[0]);
    let commantLR = commant[1];
    let step = Number(commant[2]);

    let stepIn = indexArr + step;

    if (arr[step] != "1") {
      if (commantLR == "right") {
        arr[stepIn] = "1";
      } else {
        stepIn = indexArr - step;
        arr[stepIn] = "1";
      }
    } else {
      stepIn += 1;

      if (arr[stepIn] != "1") {
        if (commantLR == "right") {
          arr[indexArr] = "0";
          arr[stepIn] = "1";
        } else {
          stepIn = indexArr - step;
          arr[stepIn] = "1";
        }
      }
    }
  }
  arr.length = size;
  console.log(`${arr.join(" ")}`);
}

//ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
//ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladybugs([ 5, '3',
'3 left 2',
'1 left -2']
)
