function sumFirstAndLastArrayElements(input) {
  let sum = 0;
  sum = input[0] + input[input.length - 1];
  console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);
