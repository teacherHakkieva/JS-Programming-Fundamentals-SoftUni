function processOddNumbers(arr) {
  let num = 0;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      num += arr[i] * 2;
      arr2.push(num);
      num = 0;
    }
  }
  console.log(arr2.reverse().join(" "));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
