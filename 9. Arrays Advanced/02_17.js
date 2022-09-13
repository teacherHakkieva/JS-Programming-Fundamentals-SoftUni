function negativeOrPositiveNumbers(arr) {
  let num = arr.map((x) => Number(x));
  let newArr = [];
  for (const el of num) {
    if (el >= 0) {
      newArr.push(el);
    } else {
      newArr.unshift(el);
    }
  }
  for (const ell of newArr) {
    console.log(ell);
  }
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
