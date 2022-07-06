function calculator(num1,sing,num2) {
let result=0;
   if (sing=='+') {
     result=num1+num2;
   }else if (sing=='*') {
    result=num1*num2;
   }else if (sing=='/') {
    result=num1/num2;
   }else if (sing=='-') {
    result=num1-num2;
   }
      console.log(`${result.toFixed(2)}`);
}
calculator(5,'*',10)