function piccolo(input) {
  let inParl = {};
  for (let i = 0; i < input.length; i++) {
    let com = input[i].split(", ");
    let inOut = com[0];
    let carNum = com[1];
    if (inOut == "IN") {
      inParl[carNum] = 0;
    } else {
    }
  }
  let sorted = Object.entries(inParl).sort();
  if (sorted.length == 0) {
  } else {
    for (const key of sorted) {
      console.log(key[0]);
    }
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
