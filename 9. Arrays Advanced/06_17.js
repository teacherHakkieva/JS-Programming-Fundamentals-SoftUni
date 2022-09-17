function smallestTwoNumbers(arr) {
    let sortingArr=arr.sort((a,b)=>a-b);
   let sortingFins=arr.slice(0,2);
   console.log(sortingFins.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])