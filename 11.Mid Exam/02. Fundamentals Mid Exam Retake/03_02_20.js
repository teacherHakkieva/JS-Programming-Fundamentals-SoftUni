function numbers(input) {
  let arr = input.split(" ").map((x) => Number(x));
  let arr1 = arr.sort((a, b) => {
    return a - b;
  });
  let sum = 0;
  let result = [];
  let result1 = [];
  for (const el of arr) {
    sum += el;
  }
  let average = sum / arr.length;
  for (let i = arr1.length; i > 0; i--) {
    if (arr1[i] > average) {
      result.push(arr1[i]);
    }
  }
  if (result.length == 0) {
    console.log("No");
    return;
  }
  if (result.length > 5) {
    let count = 0;
    for (const el of result) {
      if (count < 5) {
        result1.push(el);
        count++;
      }
    }
    console.log(result1.join(" "));
    return;
  }
  console.log(result.join(" "));
}
numbers('10 20 30 40 50');
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
