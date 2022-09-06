function factorialDivision(num1, num2) {
  function facturialCalculator(number) {
    let result = 1;
    while (number != 1) {
      result *= number;
      number -= 1;
    }
    return result;
  }
  let final = facturialCalculator(num1) / facturialCalculator(num2);
  console.log(final.toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);
