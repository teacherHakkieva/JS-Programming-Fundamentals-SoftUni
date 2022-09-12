function sumFirstAndLast(arr) {
   let firstElement=Number(arr.pop());
   let lastElement=Number(arr.shift());
   let sum=firstElement+lastElement;
   console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])