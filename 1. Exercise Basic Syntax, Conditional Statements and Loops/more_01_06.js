function sortNumber(num1, num2, num3) {
  let buffer =[num1,num2,num3];
  buffer.sort((a,b)=>b-a);
  console.log(buffer[0]);
  console.log(buffer[1]);
  console.log(buffer[2]);
}
sortNumber(2, 0, 0);
