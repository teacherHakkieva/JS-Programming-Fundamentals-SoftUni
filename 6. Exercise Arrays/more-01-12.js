function printNThElement(arr) {
    
    let step = Number(arr[arr.length-1]);
    arr.splice(arr.length-1,1);
   let result=[];
    result.push(arr[0]);
   for (let i = 0; i < arr.length; i++) {
      i+=step;
      result.push(arr[i]);
      i-=1
   }
    console.log(result.join(' '));
}
printNThElement(['5', '20', '31', '4', '20', '2']);
printNThElement(['dsa', 'asd', 'test', 'test', '2']);
printNThElement(['1', '2', '3', '4', '5', '6'])
