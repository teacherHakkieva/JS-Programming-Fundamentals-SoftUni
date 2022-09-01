function palindromeInteger(inputArr) {
  let arrOfNums = inputArr;
  function isPalindrom(number) {
    let startNum = number;
    let reversedNum = Number(number.toString().split("").reverse().join(""));
    if (startNum === reversedNum) {
      return true;
    } else {
      return false;
    }
  }
  for (let i = 0; i < arrOfNums.length; i++) {
    let currNum = arrOfNums[i];
    console.log(isPalindrom(currNum));
  }
}
palindromeInteger([123, 323]);
