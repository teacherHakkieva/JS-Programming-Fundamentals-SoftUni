function firstAndLastKNumbers(arr) {
  let k = arr[0];
  let firstEl = arr.shift();
  arr.map((x) => Number(x));
 
    let firstLine = arr.slice(0, k);
    console.log(firstLine.join(" "));
    let lastLine =arr.slice(arr.length-k);
    console.log(lastLine.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
